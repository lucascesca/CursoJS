let nome = prompt('Qual é o seu nome?')
let v = Number(prompt(`Olá ${nome}! Por gentileza, digite abaixo a sua idade.`))
let v2 = Number(prompt('Por favor, digite o seu ano de nascimento.'))
m = v * v2
alert(`${nome}, a multiplicação dos números digitados é ${m}`)
function verificar() {
    let rem = document.querySelector('input#txtr')
    let dias = document.querySelector('input#txtd')
    let horas = document.querySelector('input#txth')
    let seguro = document.querySelector('input#txti')
    let valet = document.querySelector('input#txtvt')
    let valea = document.querySelector('input#txtva')
    let xvalet = document.querySelector('input#txtnvt')
    let r = Number(rem.value)
    let d = Number(dias.value)
    let h = Number(horas.value)
    let inss = Number(seguro.value)
    let vtdiario = Number(valet.value)
    let vadiario = Number(valea.value)
    let xvtdiario = Number(xvalet.value)
    let rd = r/d
    let rh = rd / h
    let vatotal = vadiario * d
    let vttotal = vtdiario * xvtdiario * d
    let txinss = inss / 100
    let txva = 20/100
    let txvt = 6/100
    let descinss = txinss * r
    let descva = txva * vatotal
    let descvt = txvt * r
    let rl = r - descinss - descva - descvt
    let rl2 = r - descinss - descva - vtdiario
    let rano = r * 13
    let ranoinss = (r - descinss) * 13 + (r/3)
    if (dias.value > 31 || horas.value > 24) {
        alert('Dados inválidos! Por favor, verifique as informações.')
        res.innerHTML = `<p>Dias ou Horas trabalhadas preenchidos incorretamente.</p>`
    } else {
        res.innerHTML = `<p>${nome}, a sua remuneração bruta por dia trabalhado é de ${rd.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
        res.innerHTML += `<p>A sua remunerção bruta por hora trabalhada é de ${rh.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})};</p>`
        res.innerHTML += `<p>O desconto de Seguridade Social é de ${descinss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
        res.innerHTML += `<p>O valor do seu Vale-alimentação este mês é de ${vatotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
        res.innerHTML += `<p>O  desconto do seu Vale-alimentação este mês é de ${descva.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
        if (vttotal > 107.51) {
            res.innerHTML += `<p>O valor do seu Vale-transporte este mês é de ${vttotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
            res.innerHTML += `<p>O desconto do seu Vale-transporte é de ${descvt.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
            res.innerHTML += `<p>A sua remuneração liquida este mês é de ${rl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};`
        } else {
            res.innerHTML += `<p>O valor do seu Vale-transporte este mês é de ${vttotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
            res.innerHTML += `<p>O desconto do seu Vale-transporte é de ${vttotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
            res.innerHTML += `<p>A sua remuneração liquida este mês é de ${rl2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
        }
        if (ranoinss > 22847.88) {
            res.innerHTML += `<p>A sua remuneração bruta anual é de ${rano.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
            res.innerHTML += `<p>Atenção! A sua remuneração tributável é de ${ranoinss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. Consulte o site da Receita Federal do Brasil para informações sobre IRRF.</p>`
        } else {
            res.innerHTML += `<p>A sua remuneração bruta anual somada a 13º é de ${rano.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})};</p>`
            res.innerHTML += `<p>A sua remuneração tributável é de ${ranoinss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
        }
    }  
}