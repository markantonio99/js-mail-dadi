let emailUtenteEl = prompt('ciao, inserisci la tua mail')
console.log(emailUtenteEl)

 
let mailUtente = ["biagio@gmail.com","ernesto@gmail.com", "francesco@gmail.com", "luciano@gmail.com", "paolo@gmail.com",]
console.log(mailUtente)
 

for (let i = 0; i < mailUtente.length; i++){
    console.log(i, mailUtente)


if (emailUtenteEl === mailUtente ){
    console.log('la mail è presente')
}
else {
    console.log('la mail non è presente')
}

}