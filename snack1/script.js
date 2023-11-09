const bici = [
    {
       nome: "Atalà",
       peso: 1300,
    },
    {
        nome: "Bianchi",
        peso: 950, 
     },
     {
        nome: "Grazziella",
        peso: 1500,  
     },
     {
        nome: "Btwin",
        peso: 1110, 
     },
     {
        nome: "ktm",
        peso: 1200,  
     },
]
console.log(bici);

const container = document.querySelector(".container")


let minPeso = bici[0]
console.log(minPeso);

bici.forEach((curBici) =>{
   if (curBici.peso < minPeso.peso)
   minPeso = curBici
})
console.log(minPeso);

const {nome, peso} = minPeso

container.innerHTML = `<p>La bici più leggera pesa ${peso} grammi, è la bici della ${nome}<p>`