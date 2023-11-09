const squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falli: 0
    },
    {
        nome:"PSG",
        puntiFatti: 0,
        falli:0
    },
    {
        nome:"New Castle",
        puntiFatti:0,
        falli:0
    },
    {
        nome: "Borussia",
        puntiFatti: 0,
        falli:0
    },
];

squadre.forEach((team) => {
    team.falli = numRandom(0, 50);
    team.puntiFatti = numRandom(0, 50);
});

const newTeams = squadre.map((team) =>{
    const {nome, falli} = team
    console.log(nome, falli);
    return{
        nome,
        falli
    }
})
console.log(newTeams);

function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }