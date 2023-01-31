function gerar() {
    num = document.querySelector('input#numb')
    tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n}*${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}