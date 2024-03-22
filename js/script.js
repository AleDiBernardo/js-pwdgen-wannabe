// GET DATA AND VARIABLES DECLARATION

let userName = prompt("Inserisci il tuo nome");
let userSurname = prompt("Inserisci il tuo cognome");
let preferredColor = prompt("Inserisci il tuo colore preferito");

// LOGICAL BLOCK
let randNum = Math.floor(Math.random() * 100); 
let inputResult = userName + userSurname + preferredColor + randNum;



// PRINT OUTPUT
document.getElementById("result").innerHTML = `

    <h1>${inputResult}</h1>
`