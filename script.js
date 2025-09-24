// Aggiungo un'istruzione per caricare il file JSON
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Errore nel caricamento dei dati:', error);
        return null;
    }
}

// Funzione principale che carica i dati e inizializza l'applicazione
async function initializeApp() {
    const data = await loadData();
    if (!data) return;

    const { fantallenatori, teamLogos, calendario } = data;
    const container = document.querySelector('.container');

    function createMatchCard(match) {
        const fantallenatoreCasa = fantallenatori[match.casa];
        const fantallenatoreOspite = fantallenatori[match.ospite];

        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';

        let scoreHTML = '<div class="score">? - ?</div>';
        let fantaPuntiHTML = '<div class="fantapunti">FantaPunti: ? - ?</div>';

        if (match.scoreCasa !== null && match.scoreOspite !== null) {
            scoreHTML = `<div class="score">${match.scoreCasa} - ${match.scoreOspite}</div>`;
        }
        if (match.fantaPuntiCasa !== null && match.fantaPuntiOspite !== null) {
            fantaPuntiHTML = `<div class="fantapunti">FantaPunti: ${match.fantaPuntiCasa} - ${match.fantaPuntiOspite}</div>`;
        }

        matchCard.innerHTML = `
            <div class="teams">
                <img src="${teamLogos[match.casa]}" alt="${match.casa} logo" class="team-logo">
                <span>vs</span>
                <img src="${teamLogos[match.ospite]}" alt="${match.ospite} logo" class="team-logo">
            </div>
            ${scoreHTML}
            ${fantaPuntiHTML}
            <div class="fantallenatori">
                <span>${fantallenatoreCasa}</span> vs <span>${fantallenatoreOspite}</span>
            </div>
        `;

        return matchCard;
    }

    function createDaySection(day) {
        const daySection = document.createElement('div');
        daySection.className = 'day-section';

        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.innerHTML = `
            <h2>Giornata ${day.giornata}</h2>
            <span class="toggle-icon">+</span>
        `;

        const matchesContainer = document.createElement('div');
        matchesContainer.className = 'matches-container';

        day.partite.forEach(partita => {
            matchesContainer.appendChild(createMatchCard(partita));
        });

        dayHeader.addEventListener('click', () => {
            matchesContainer.classList.toggle('open');
            const icon = dayHeader.querySelector('.toggle-icon');
            icon.textContent = matchesContainer.classList.contains('open') ? '−' : '+';
        });

        daySection.appendChild(dayHeader);
        daySection.appendChild(matchesContainer);
        container.appendChild(daySection);
    }

    // Funzione per calcolare gli scontri diretti tra squadre a pari punti
    function calculateHeadToHead(teams, teamsWithSamePoints) {
        if (teamsWithSamePoints.length <= 1) return teamsWithSamePoints;

        const h2hStats = {};
        
        // Inizializza statistiche scontri diretti
        teamsWithSamePoints.forEach(team => {
            h2hStats[team.squadra] = {
                squadra: team.squadra,
                punti: 0,
                golFatti: 0,
                golSubiti: 0,
                differenzaReti: 0,
                fantaPuntiTotali: 0,
                originalTeam: team
            };
        });

        // Calcola risultati degli scontri diretti
        calendario.forEach(day => {
            day.partite.forEach(match => {
                if (match.scoreCasa !== null && match.scoreOspite !== null) {
                    const squadreInScontro = teamsWithSamePoints.map(t => t.squadra);
                    
                    if (squadreInScontro.includes(match.casa) && squadreInScontro.includes(match.ospite)) {
                        const statsCasa = h2hStats[match.casa];
                        const statsOspite = h2hStats[match.ospite];

                        // Aggiorna gol
                        statsCasa.golFatti += match.scoreCasa;
                        statsCasa.golSubiti += match.scoreOspite;
                        statsOspite.golFatti += match.scoreOspite;
                        statsOspite.golSubiti += match.scoreCasa;

                        // Aggiorna fantapunti
                        if (match.fantaPuntiCasa !== null) {
                            statsCasa.fantaPuntiTotali += match.fantaPuntiCasa;
                        }
                        if (match.fantaPuntiOspite !== null) {
                            statsOspite.fantaPuntiTotali += match.fantaPuntiOspite;
                        }

                        // Aggiorna punti
                        if (match.scoreCasa > match.scoreOspite) {
                            statsCasa.punti += 3;
                        } else if (match.scoreCasa < match.scoreOspite) {
                            statsOspite.punti += 3;
                        } else {
                            statsCasa.punti += 1;
                            statsOspite.punti += 1;
                        }
                    }
                }
            });
        });

        // Calcola differenza reti per gli scontri diretti
        Object.values(h2hStats).forEach(stat => {
            stat.differenzaReti = stat.golFatti - stat.golSubiti;
        });

        // Ordina per scontri diretti
        const sortedH2H = Object.values(h2hStats).sort((a, b) => {
            // Punti negli scontri diretti
            if (b.punti !== a.punti) return b.punti - a.punti;
            
            // Fantapunti negli scontri diretti
            if (b.fantaPuntiTotali !== a.fantaPuntiTotali) return b.fantaPuntiTotali - a.fantaPuntiTotali;
            
            // Differenza reti negli scontri diretti
            if (b.differenzaReti !== a.differenzaReti) return b.differenzaReti - a.differenzaReti;
            
            // Gol fatti negli scontri diretti
            return b.golFatti - a.golFatti;
        });

        return sortedH2H.map(stat => stat.originalTeam);
    }

    // Funzione per calcolare e aggiornare la classifica
    function updateLeaderboard() {
        const teams = {};

        // Inizializza i dati delle squadre
        for (const team in fantallenatori) {
            teams[team] = {
                squadra: team,
                punti: 0,
                giocate: 0,
                vinte: 0,
                pareggiate: 0,
                perse: 0,
                golFatti: 0,
                golSubiti: 0,
                differenzaReti: 0,
                fantaPuntiTotali: 0
            };
        }

        // Applica penalizzazione al Bologna
        if (teams['BOLOGNA']) {
            teams['BOLOGNA'].punti = -2;
        }

        // Calcola i punti e fantapunti in base ai risultati
        calendario.forEach(day => {
            day.partite.forEach(match => {
                if (match.scoreCasa !== null && match.scoreOspite !== null) {
                    const teamCasa = teams[match.casa];
                    const teamOspite = teams[match.ospite];

                    // Aggiorna partite giocate
                    teamCasa.giocate++;
                    teamOspite.giocate++;

                    // Aggiorna gol
                    teamCasa.golFatti += match.scoreCasa;
                    teamCasa.golSubiti += match.scoreOspite;
                    teamOspite.golFatti += match.scoreOspite;
                    teamOspite.golSubiti += match.scoreCasa;

                    // Aggiorna fantapunti totali
                    if (match.fantaPuntiCasa !== null) {
                        teamCasa.fantaPuntiTotali += match.fantaPuntiCasa;
                    }
                    if (match.fantaPuntiOspite !== null) {
                        teamOspite.fantaPuntiTotali += match.fantaPuntiOspite;
                    }

                    // Aggiorna risultati e punti
                    if (match.scoreCasa > match.scoreOspite) {
                        teamCasa.punti += 3;
                        teamCasa.vinte++;
                        teamOspite.perse++;
                    } else if (match.scoreCasa < match.scoreOspite) {
                        teamOspite.punti += 3;
                        teamOspite.vinte++;
                        teamCasa.perse++;
                    } else {
                        teamCasa.punti += 1;
                        teamOspite.punti += 1;
                        teamCasa.pareggiate++;
                        teamOspite.pareggiate++;
                    }
                }
            });
        });

        // Calcola la differenza reti
        for (const team in teams) {
            teams[team].differenzaReti = teams[team].golFatti - teams[team].golSubiti;
        }

        // Converti l'oggetto in un array per ordinare
        let sortedTeams = Object.values(teams);

        // Raggruppa squadre per punti e applica scontri diretti
        const pointsGroups = {};
        sortedTeams.forEach(team => {
            if (!pointsGroups[team.punti]) {
                pointsGroups[team.punti] = [];
            }
            pointsGroups[team.punti].push(team);
        });

        // Ordina ciascun gruppo per scontri diretti
        let finalSortedTeams = [];
        Object.keys(pointsGroups)
            .sort((a, b) => parseInt(b) - parseInt(a)) // Ordina per punti decrescenti
            .forEach(points => {
                const teamsWithSamePoints = pointsGroups[points];
                
                if (teamsWithSamePoints.length > 1) {
                    // Applica scontri diretti
                    const sortedByH2H = calculateHeadToHead(teams, teamsWithSamePoints);
                    
                    // Se ci sono ancora squadre pari dopo scontri diretti, usa altri criteri
                    sortedByH2H.sort((a, b) => {
                        // Fantapunti totali generali
                        if (b.fantaPuntiTotali !== a.fantaPuntiTotali) {
                            return b.fantaPuntiTotali - a.fantaPuntiTotali;
                        }
                        // Differenza reti generale
                        if (b.differenzaReti !== a.differenzaReti) {
                            return b.differenzaReti - a.differenzaReti;
                        }
                        // Gol fatti generali
                        return b.golFatti - a.golFatti;
                    });
                    
                    finalSortedTeams.push(...sortedByH2H);
                } else {
                    finalSortedTeams.push(...teamsWithSamePoints);
                }
            });

        // Crea la tabella HTML della classifica
        const leaderboardDiv = document.getElementById('leaderboard');
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Pos.</th>
                        <th>Squadra</th>
                        <th>Punti</th>
                        <th>FantaPunti</th>
                        <th>GF</th>
                        <th>GS</th>
                        <th>DR</th>
                    </tr>
                </thead>
                <tbody>
        `;
        finalSortedTeams.forEach((team, index) => {
            tableHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td class="squadra-cell">
                        <img src="${teamLogos[team.squadra]}" alt="${team.squadra} logo" class="team-logo-leaderboard">
                        ${team.squadra}
                    </td>
                    <td>${team.punti}</td>
                    <td>${team.fantaPuntiTotali.toFixed(1)}</td>
                    <td>${team.golFatti}</td>
                    <td>${team.golSubiti}</td>
                    <td>${team.differenzaReti}</td>
                </tr>
            `;
        });
        tableHTML += '</tbody></table>';

        leaderboardDiv.innerHTML = tableHTML;
    }

    // Genera il calendario e la classifica all'avvio
    calendario.forEach(createDaySection);
    updateLeaderboard();
}

initializeApp();