/*
    ! X LORIS E LUCA:

    TRANQUILLI OGGI NON VI FARÒ GIRARE LA TESTA,
    PERÒ NON ABITUATEVI TROPPO A QUESTA CALMA...

    BUON WEEKEND E STACCATE UN PO' ANCHE VOI!!
*/


// GET DATA AND VARIABLES DECLARATION
let userName = prompt("Inserisci il tuo nome"); //string
let userSurname = prompt("Inserisci il tuo cognome"); //string
let preferredColor = prompt("Inserisci il tuo colore preferito"); //string 

// LOGICAL BLOCK
let randNum = Math.floor(Math.random() * 100); //number
let inputResult = userName + userSurname + preferredColor + randNum; //string



// PRINT OUTPUT
document.getElementById("result").innerHTML = `

    <span class="fs-2 text-white fw-bold"> ${inputResult}</span>
`