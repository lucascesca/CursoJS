function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique as informações e tente novamente!')
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
    }
}