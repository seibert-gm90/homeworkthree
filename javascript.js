var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase= "abcdefghijklmnopqrstuvwxyz"
var num = "0123456789"
var specialChar= "!@#$%^&*()"

// var passwordLength= prompt("Choose a password length between 8 and 20.")
var userPwEl = document.querySelector("#userPwInput")
var upperCaseCheckbox = document.querySelector("#uppercase")
var lowerCaseCheckbox = document.querySelector("#lowercase")
var numCheckbox = document.querySelector("#number")
var specialCharCheckbox = document.querySelector("#specialCharacter")

function generatePassword(){
    var passwordInput = document.querySelector("#inputPassword5")
    var generatedPassword = ""
    var passwordLength = userPwEl.value

    var upperChecked = upperCaseCheckbox.checked;
    var lowerChecked = lowerCaseCheckbox.checked;
    var numberChecked = numCheckbox.checked;
    var specialCharacterChecked = specialCharCheckbox.checked;
    var charArray; 
    if (!upperChecked && !lowerChecked && !numberChecked && !specialCharacterChecked ){
        alert ("Please check a box!")
        return;
    }
    if (upperChecked){
        charArray += upperCase
    }

    if (lowerChecked){
        charArray += lowerCase

    }

    if (numberChecked){
        charArray += num

    }

    if (specialCharacterChecked){
        charArray += specialChar
    }

    for (var i = 0; i < (passwordLength); i++) {
        var char = charArray[Math.floor(Math.random() * charArray.length)];
        generatedPassword = generatedPassword + char
    }
    passwordInput.value = generatedPassword
}



function copyStringToClipboard() {
    var copyText = document.querySelector("#inputPassword5");

    copyText.select("#inputPassword5");
    document.execCommand("copy");
    alert("Copied the text." + copyText.value)
}