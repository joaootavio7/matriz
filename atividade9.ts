/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/

console.clear();
let teclado = require(`prompt-sync`)();
let matrizDois: number[][] = new Array(3);

let linha: number = 6;
let coluna: number = 6;
let soma = 0;

for (let i = 0; i < 6; i++) {
    matrizDois[i] = new Array(3);
    linha = i
    for (let j = 0; j < 6; j++) {
        let numero: number = Math.floor(Math.random() * 10);
        matrizDois[i][j] = numero;
        coluna = j
    }
}

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (j % 2 == 0) {
            soma += matrizDois[i][j];
        }
    }
}
console.log(matrizDois);
console.log(soma)