function myFunction() {

let word = prompt("Insert a word! only lowercase pls!");
let palindrome = "";

for (let i = word.length - 1; i >= 0; i--) {

    palindrome += word[i];
}

if (word == palindrome) {
    document.getElementById("text").innerHTML =`The word: ${word} is palindrome`;
} else {
    document.getElementById("text").innerHTML = `The word: ${word} is not palindrome`;
}
}


// pt2

function myFunction2() {

    let choice = prompt("Pari o dispari? scegli bene")


    if(choice == "pari" || choice == "dispari"){
        document.getElementById("text2").innerHTML =`hai scelto : ${choice}`;
        let playerNum = playerChoice();
        let cpuNum = randomGen();
        document.getElementById("text3").innerHTML = ` Hai scelto il numero : ${playerNum}`
        document.getElementById("text4").innerHTML = ` La CPU ha scelto il numero ${cpuNum} `;
        // Stampa somma
        let somma = sommaNumeri(playerNum, cpuNum);
        let risultato;
        if(somma % 2 == 0){
            risultato = "pari";
        }else{
            risultato = "dispari";
        }
        document.getElementById("textx").innerHTML =(risultato)
        if(choice == risultato){
            document.getElementById("text5").innerHTML = `hai vinto!` ;
        }else{
            document.getElementById("text6").innerHTML = "hai perso :(";
        }
    
    
    }
    
    
    
    function sommaNumeri(playerNum, cpuNum){
        let somma = (playerNum + cpuNum);
        document.getElementById("text7").innerHTML = `la somma è : ${somma}`;
        return somma;
    }
    function playerChoice(){
        let playerNum = parseInt(prompt("Digita un numero da 1 a 5"))
        
        return playerNum;
    
    }
    
    function randomGen(){
        let cpuNum = Math.round(Math.random() * 5) + 1;
        
        return cpuNum;
    }

}