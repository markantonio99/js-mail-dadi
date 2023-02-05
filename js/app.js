// let emailUtenteEl = prompt('ciao, inserisci la tua mail')
// console.log(emailUtenteEl)

 
// let mailUtente = ["biagio@gmail.com","ernesto@gmail.com", "francesco@gmail.com", "luciano@gmail.com", "paolo@gmail.com",]
// console.log(mailUtente)
 
// const cntMail = document.getElementById('controllo_mail')
 

// for (let i = 0; i < mailUtente.length; i++){
//     console.log( i, )
   
    


// if (emailUtenteEl === mailUtente[i]){
//     console.log('la mail è presente');
//     cntMail.innerHTML =  'La mail è presente'
    
// }
// else {
//     console.log('la mail non è presente')
//     cntMail.innerHTML =  'La mail non è presente'
// }

// }









////////////// gioco dei dadi:


// costruire un bottone che attiva i numeri random
//
//
//
//
//
//
//
//
//
//
//
//

const nunmPcEl = document.getElementById('nunmPc')

const nunmUtEl = document.getElementById('nunmUt')



const numeroPc = Math.floor(Math.random() * (7 - 1) + 1);
console.log(numeroPc )

nunmPcEl.innerHTML = 'il numero del dado Pc è' + " " + (numeroPc) 

const numeroUt = Math.floor(Math.random() * (7 - 1) + 1);
console.log(numeroUt)

nunmUtEl.innerHTML = 'il numero del tuo dado è' + " " + (numeroUt) 


const risVincEl = document.getElementById('risVinc')
console.log(risVincEl)

if (numeroPc < numeroUt ){
const risVincEl = document.getElementById('risVinc')
risVincEl.innerHTML = 'Hai vinto'
}

else if (numeroPc > numeroUt ) {
    risVincEl.innerHTML = 'Hai Perso'
}

else {
    risVincEl.innerHTML = 'Avete pareggiato!'

}