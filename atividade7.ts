/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.*/

console.clear();
let teclado = require(`prompt-sync`)();
let matrizDois: number[][] = new Array(3);

let linha: number = 3;
let coluna: number = 3;

for (let i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 3; j++) {
        let numero: number = Math.floor(Math.random() * 10);
        matrizDois[i][j] = numero;
    }

}
console.log(matrizDois);