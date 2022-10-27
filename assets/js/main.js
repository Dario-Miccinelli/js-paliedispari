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