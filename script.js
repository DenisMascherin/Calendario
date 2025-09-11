// Dati completi del calendario e dei risultati
const fantallenatori = {
    'NAPOLI': 'Mattia Beltrame',
    'INTER': 'Federico Burello',
    'JUVENTUS': 'Denis Mascherin',
    'ATALANTA': 'Kevin Di Bernardo',
    'ROMA': 'Alex Beltrame',
    'LAZIO': 'Cristian Tartaro',
    'MILAN': 'Lorenzo Moro',
    'BOLOGNA': 'Nicola Marano'
};

const calendario = [
    // Giornata 1
    {
        giornata: 1,
        partite: [
            { casa: 'MILAN', ospite: 'JUVENTUS', scoreCasa: 1, scoreOspite: 2 },
            { casa: 'NAPOLI', ospite: 'BOLOGNA', scoreCasa: 2, scoreOspite: 0 },
            { casa: 'ROMA', ospite: 'LAZIO', scoreCasa: 2, scoreOspite: 0 },
            { casa: 'INTER', ospite: 'ATALANTA', scoreCasa: 4, scoreOspite: 3 }
        ]
    },
    // Giornata 2
    {
        giornata: 2,
        partite: [
            { casa: 'MILAN', ospite: 'BOLOGNA', scoreCasa: 2, scoreOspite: 1 },
            { casa: 'ATALANTA', ospite: 'NAPOLI', scoreCasa: 0, scoreOspite: 2 },
            { casa: 'INTER', ospite: 'ROMA', scoreCasa: 2, scoreOspite: 1 },
            { casa: 'LAZIO', ospite: 'JUVENTUS', scoreCasa: 4, scoreOspite: 1 }
        ]
    },
    // Giornata 3
    {
        giornata: 3,
        partite: [
            { casa: 'NAPOLI', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 4
    {
        giornata: 4,
        partite: [
            { casa: 'INTER', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 5
    {
        giornata: 5,
        partite: [
            { casa: 'LAZIO', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'ROMA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 6
    {
        giornata: 6,
        partite: [
            { casa: 'INTER', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 7
    {
        giornata: 7,
        partite: [
            { casa: 'INTER', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 8
    {
        giornata: 8,
        partite: [
            { casa: 'ATALANTA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 9
    {
        giornata: 9,
        partite: [
            { casa: 'ROMA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 10
    {
        giornata: 10,
        partite: [
            { casa: 'INTER', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 11
    {
        giornata: 11,
        partite: [
            { casa: 'BOLOGNA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 12
    {
        giornata: 12,
        partite: [
            { casa: 'INTER', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 13
    {
        giornata: 13,
        partite: [
            { casa: 'MILAN', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'ROMA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 14
    {
        giornata: 14,
        partite: [
            { casa: 'JUVENTUS', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 15
    {
        giornata: 15,
        partite: [
            { casa: 'INTER', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 16
    {
        giornata: 16,
        partite: [
            { casa: 'INTER', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 17
    {
        giornata: 17,
        partite: [
            { casa: 'NAPOLI', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 18
    {
        giornata: 18,
        partite: [
            { casa: 'INTER', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 19
    {
        giornata: 19,
        partite: [
            { casa: 'LAZIO', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'ROMA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 20
    {
        giornata: 20,
        partite: [
            { casa: 'INTER', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 21
    {
        giornata: 21,
        partite: [
            { casa: 'INTER', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 22
    {
        giornata: 22,
        partite: [
            { casa: 'ATALANTA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 23
    {
        giornata: 23,
        partite: [
            { casa: 'ROMA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 24
    {
        giornata: 24,
        partite: [
            { casa: 'INTER', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 25
    {
        giornata: 25,
        partite: [
            { casa: 'BOLOGNA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 26
    {
        giornata: 26,
        partite: [
            { casa: 'INTER', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 27
    {
        giornata: 27,
        partite: [
            { casa: 'MILAN', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'ROMA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 28
    {
        giornata: 28,
        partite: [
            { casa: 'JUVENTUS', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 29
    {
        giornata: 29,
        partite: [
            { casa: 'INTER', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 30
    {
        giornata: 30,
        partite: [
            { casa: 'INTER', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 31
    {
        giornata: 31,
        partite: [
            { casa: 'NAPOLI', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 32
    {
        giornata: 32,
        partite: [
            { casa: 'INTER', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 33
    {
        giornata: 33,
        partite: [
            { casa: 'LAZIO', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'MILAN', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'ROMA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 34
    {
        giornata: 34,
        partite: [
            { casa: 'INTER', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'ROMA', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 35
    {
        giornata: 35,
        partite: [
            { casa: 'INTER', ospite: 'JUVENTUS', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 36
    {
        giornata: 36,
        partite: [
            { casa: 'ATALANTA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 37
    {
        giornata: 37,
        partite: [
            { casa: 'ROMA', ospite: 'INTER', scoreCasa: null, scoreOspite: null },
            { casa: 'BOLOGNA', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'LAZIO', scoreCasa: null, scoreOspite: null },
            { casa: 'NAPOLI', ospite: 'ATALANTA', scoreCasa: null, scoreOspite: null }
        ]
    },
    // Giornata 38
    {
        giornata: 38,
        partite: [
            { casa: 'INTER', ospite: 'NAPOLI', scoreCasa: null, scoreOspite: null },
            { casa: 'LAZIO', ospite: 'MILAN', scoreCasa: null, scoreOspite: null },
            { casa: 'JUVENTUS', ospite: 'ROMA', scoreCasa: null, scoreOspite: null },
            { casa: 'ATALANTA', ospite: 'BOLOGNA', scoreCasa: null, scoreOspite: null }
        ]
    }
];

const container = document.querySelector('.container');

function createMatchCard(match) {
    const fantallenatoreCasa = fantallenatori[match.casa];
    const fantallenatoreOspite = fantallenatori[match.ospite];

    const matchCard = document.createElement('div');
    matchCard.className = 'match-card';
    
    let scoreHTML = '<div class="score">? - ?</div>';
    if (match.scoreCasa !== null && match.scoreOspite !== null) {
        scoreHTML = `<div class="score">${match.scoreCasa} - ${match.scoreOspite}</div>`;
    }

    matchCard.innerHTML = `
        <div class="teams">${match.casa} - ${match.ospite}</div>
        ${scoreHTML}
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

// Funzione per calcolare e aggiornare la classifica
function updateLeaderboard() {
    const teams = {};

    // Inizializza i dati delle squadre
    for (const team in fantallenatori) {
        teams[team] = {
            punti: 0,
            giocate: 0,
            vinte: 0,
            pareggiate: 0,
            perse: 0,
            golFatti: 0,
            golSubiti: 0,
            differenzaReti: 0
        };
    }

    // Applica penalizzazione al Bologna
    teams['BOLOGNA'].punti = -2;

    // Calcola i punti in base ai risultati
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
    const sortedTeams = Object.keys(teams).map(key => ({
        squadra: key,
        ...teams[key]
    }));

    // Ordina la classifica
    sortedTeams.sort((a, b) => b.punti - a.punti);

    // Crea la tabella HTML della classifica
    const leaderboardDiv = document.getElementById('leaderboard');
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Pos.</th>
                    <th>Squadra</th>
                    <th>Punti</th>
                </tr>
            </thead>
            <tbody>
    `;
    sortedTeams.forEach((team, index) => {
        tableHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${team.squadra}</td>
                <td>${team.punti}</td>
            </tr>
        `;
    });
    tableHTML += '</tbody></table>';

    leaderboardDiv.innerHTML = tableHTML;
}

// Genera il calendario e la classifica all'avvio
calendario.forEach(createDaySection);
updateLeaderboard();