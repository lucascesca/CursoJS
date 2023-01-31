function verificar() {
let date = new Date()
let ano = date.getFullYear()
let month = new Date()
let mes = month.getMonth()
let fano = document.querySelector('input#txtano')
let fmes = document.querySelector('input#txtmes')
let res = document.querySelector('div#res')
if (Number(fano.value.length) == 0 || Number(fano.value) > ano || Number(fmes.value.length) == 0) {
    alert('[ERRO} Verifique as informações digitadas')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 12) {
            //criança
            img.setAttribute('src', 'pexels-bess-hamiti-35537.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'pexels-sebastiaan-stam-1304647.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'pexels-pixabay-220453.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'pexels-laura-garcia-3271268.jpg')
        }
    } else {
        gênero = 'Mulher'
        if (idade >=0 && idade < 12) {
            //criança
            img.setAttribute('src', 'pexels-kelvin-agustinus-1096147.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'pexels-leonardo-luz-14760996.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'pexels-leonardo-luz-14760996.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'pexels-edu-carvalho-2050994.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    if (Number(fmes.value) > mes) {
        let age = idade - 1
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${age} anos.`
        res.appendChild(img)}
}
}