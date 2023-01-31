nome = window.prompt('Qual é o seu nome?')
n1 = Number(prompt(`Olá ${nome}! Para iniciarmos, digite abaixo um número.`))
n2 = Number(prompt('Por favor, digite outro número.'))
m = n1 * n2
alert(`A multiplicação de ${n1} e ${n2} é igual a ${m}.`)
function verificar() {
    var trt = document.querySelector('input#txts')
    var tdt = document.querySelector('input#txtd')
    var tht = document.querySelector('input#txth')
    rt = Number(trt.value)
    dt = Number(tdt.value)
    if (tdt.value > 31) {
        res.innerHTML = '[ERRO] Favor, verifique as informações digitadas!'
    }
    ht = Number(tht.value)
    if (ht > 24) {
        res.innerHTML += '[ERRO] Favor, verifique as informações digitadas!'
    } else {
    resp = rt / dt / ht
    res.innerHTML += `A sua remuneração por hora trabalhada é ${resp.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`
    }
}