nome = prompt('Por favor, digite o seu nome')
nm = document.querySelector('div#wel')
wel.innerHTML = `<h1>Olá ${nome}! Seja bem-vindo!</h1>`
function média() {
    notapt = document.querySelector('input#nota1')
    notarl = document.querySelector('input#nota2')
    notamt = document.querySelector('input#nota3')
    notadt = document.querySelector('input#nota4')
    ntpt = Number(notapt.value)
    ntrl = Number(notarl.value)
    ntmt = Number(notamt.value)
    ntdt = Number(notadt.value)
    media = (ntpt + ntrl + ntmt + ntdt)/ 4
    if (media <= 80) {
        med.innerHTML = `Sua média é de ${media}% de aproveitamento! Seu desepenho está péssimo precisa melhorar! \u{1F641}`
    } else if (media >= 80 && media <= 90) {
        med.innerHTML = `Sua média é de ${media}% de aproveitamento! Seu desempenho está bom, mas pode melhorar! \u{1F615}`
    } else {
        med.innerHTML = `Sua média é de ${media}% de aproveitamento! Seu desempenho está ótimo! \u{1F642}`
    }
}