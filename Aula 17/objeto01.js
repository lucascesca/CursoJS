let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.5, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p // o this é autoreferência ao objeto
}}
amigo.engordar(2) //adiciona o número à variável p
console.log(typeof amigo)   
//console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)