let num = [5, 8, 2, 9, 3]
num [5] = 6
num.push(1)
num.sort()
/*console.log(num)  forma padrão, mas não visualmente agradável
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/
/*for (let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
/*for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(`O numéro 5 está na posição ${num.indexOf(5)}`)*/
let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}