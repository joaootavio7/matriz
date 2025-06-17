console.clear();
let teclado = require(`prompt-sync`)()

let matrizDois: number[][] = new Array(3)

for (let i = 0; i < 4; i++) {

    matrizDois[i] = new Array(3)

    for (let j = 0; j < 4; j++) {

        let numero: number = teclado(`Digite o número que vai estar no endereço [${i}, ${j}]
                           da matriz: `)


        matrizDois[i][j] = numero;
    }
}
console.log(matrizDois)