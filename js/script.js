const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './img/wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: './img/barbara-ramos-graphic-designer.jpg'
    },
]
console.log(team);

const containerElement = document.querySelector('main section.team');

for (let i = 0; i < team.length; i ++){
    const persone = team[i];

    const teamCards = document.createElement('article');
    teamCards.innerHTML =
    `<h1>${persone.nome}</h1>
    <p>${persone.ruolo}</p>
    <img src="${persone.foto}" alt="descrizione foto"></img>`

    containerElement.appendChild(teamCards);

}