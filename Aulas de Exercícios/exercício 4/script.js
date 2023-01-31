function tabuada() {
    num = document.querySelector('input#txtn')
    tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        n = Number(num.value)
        tab.innerHTML = '' //serve para limpar a tabuada
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`// serve para saber qual item foi selecionado
            tab.appendChild(item)
        }
    }
}