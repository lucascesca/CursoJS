function carregar() {
    msg1 = document.querySelector('div#msg1')
    img = document.querySelector('img#imagem')
    data = new Date()
    diaSem = data.getDay()
    hora = data.getHours()
    minutos = data.getMinutes()
    msg1.innerHTML = `Olá`
    switch (diaSem) {
        case 0:
            msg2.innerHTML = '<p>Hoje é domingo.</p>'
            break
        case 1:
            msg2.innerHTML = '<p>Hoje é segunda-feira.</p>'
            break
        case 2:
            msg2.innerHTML = '<p>Hoje é terça-feira.</p>'
            break
        case 3:
            msg2.innerHTML = '<p>Hoje é quarta-feira.</p>'
            break
        case 4:
            msg2.innerHTML = '<p>Hoje é quinta-feira.</p>'
            break
        case 5:
            msg2.innerHTML = '<p>Hoje é sexta-feira.</p>'
            break
        case 6:
            msg2.innerHTML = '<p>Hoje é sábado.</p>'
            break
        default:
            msg2.innerHTML = '[ERRO]'
            break
    }
    msg3.innerHTML = `São ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'pexels-artur-roman-1167355.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora == 18) {
        img.src = 'pexels-george-desipris-858241.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'pexels-pixabay-414144.jpg'
        document.body.style.background = '#515154'
    }
}