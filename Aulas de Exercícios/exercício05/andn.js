let num = document.querySelector('input#txtn')
let selecao = document.querySelector('select#sel')
let res = document.querySelector('div#res')
let val = []
function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { return true } 
    else {return false}
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (numero(num.value) && !inLista(num.value, val)) {  
       val.push(Number(num.value))
       item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        selecao.appendChild(item)        // o res.innerHTML = '' na linha abaixo serve para limpar o resultado anterior quando for adcionar novos números
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (val.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        //let media = 0
        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior) {
                maior = val[pos]
            } else if (val[pos] < menor) {
                menor = val[pos]
            }
            media = soma / total
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, tem-se ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}`
    }
}