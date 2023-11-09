const listaArr = ["pane","lumaca","pietra","gola","sabbia"]
const min = 1;
const max = 4;

const newLista = creaArr(min, max, listaArr)
console.log(newLista);

//funzione crea array
function creaArr(a,b,array) {
    const arr = [];
    array.forEach((element, index) => {
        if (index >= a && index <= b)
        arr.push(element)
    });
    return arr;
}
