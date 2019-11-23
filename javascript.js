var randomCharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
var charArray = randomCharacters.split('')
var n = charArray.length
var passwordLength= prompt("Choose a password length between 8 and 20.");

function generatePassword(){
    var passwordInput = document.querySelector("#inputPassword5")
    var generatedPassword = ""

    for (var i = 0; i < (passwordLength); i++) {
        var char = charArray[Math.floor(Math.random() * n)];
        generatedPassword = generatedPassword + char
    }

    passwordInput.value = generatedPassword

}



function copyStringToClipboard(str) {

}