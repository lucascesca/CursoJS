function contar() {
    let tin = document.querySelector('input#in1')
    let tfim =  document.querySelector('input#fim1')
    let tpass = document.querySelector('input#pass1')
    let res = document.querySelector('div#res')
    if (tin.value.length == 0 || tfim.value.length == 0 || tpass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: </br>'
        let início = Number(tin.value)
        let fim = Number(tfim.value)
        let passo = Number(tpass.value)
        if (passo <= 0) {
            alert('[ERRO] Passo inválido! Considerando Passo 1')
            passo = 1
        }
        if (início < fim) {
            //contagem crescente
            for (let c = início; c <= fim; c  += passo) {res.innerHTML += `\u{27A1} ${c} ` }
        } else {
            //contagem decrescente
            for (let c = início; c >= fim; c -= passo) {res.innerHTML += `\u{27A1} ${c} `}
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
