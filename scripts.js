let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
let symbolList = "! @ # $ % ^ & * ( ) _ + { } ; ~ ? , . /";
let alphaArr = alphabet.split(" ");
let upperAlphArr = alphabet.toUpperCase().split(" ");
let symbolArr = symbolList.split(" ");
let amount = 8; //8 is default
let uppercase = false;
let symbols = false;
let numbers = false;

function generatePassword(length, uppercase, symbols, numbers){
    let password = [];

    let options = ["lowercase"];
    if(uppercase){
        options.push("uppercase");
    }
    if(symbols){
        options.push("symbols");
    }
    if(numbers){
        options.push("numbers");
    }
    let choicesCount = new Array(options.length).fill(0);
    
    //choose password characters
    for(let i = 0; i < length; i++){
        let choice = Math.floor(Math.random() * options.length);
        
        //if we're halfway through password gen
        if (password.length > length/2){
            for (let j = 0; j < choicesCount.length; j++){
                //and one of the options haven't been chosen
                if(choicesCount[j] == 0){
                    choice = j;
                }
            }
        }
        choicesCount[choice]++;
        password.push(chooseRandom(options[choice]));
        
    }
    //shuffle the password
    password.sort(() => Math.random() - .5);

    //make sure there's no options left out

    // let nozeroes = true;
    // for(let i = 0; i < choicesCount.length; i++){
    //     if(choicesCount[i] == 0){
    //         nozeroes = false;
    //     }
    // }
    // if(nozeroes){
    //     console.log("true")
    // }
    // else{
    //     console.log("false")
    // }
    
    return password.join('');
}

function chooseRandom(choice){
    if(choice == "lowercase"){
        return alphaArr[Math.floor(Math.random() * alphaArr.length)];
    }
    if(choice == "uppercase"){
        return upperAlphArr[Math.floor(Math.random() * upperAlphArr.length)];
    }
    if(choice == "symbols"){
        return symbolArr[Math.floor(Math.random() * symbolArr.length)];
    }
    if(choice == "numbers"){
        return Math.floor(Math.random() * 10);
    }
    
}

console.log(generatePassword(10, true, true, true));

document.querySelector(".plus").addEventListener("click", (e) => {
    if(amount < 20){    
        amount++;
    }
    document.querySelector(".char-amount").textContent = amount;
});
document.querySelector(".minus").addEventListener("click", (e) => {
    if (amount > 4){ 
        amount--;
    }
    document.querySelector(".char-amount").textContent = amount;
});
document.querySelector(".capitals").addEventListener("change", (e) => {
    if(uppercase){
        uppercase = false;
    }
    else{
        uppercase = true;
    }
});
document.querySelector(".numbers").addEventListener("change", (e) => {
    if(numbers){
        numbers = false;
    }
    else{
        numbers = true;
    }
});
document.querySelector(".symbols").addEventListener("change", (e) => {
    if(symbols){
        symbols = false;
    }
    else{
        symbols = true;
    }
});

document.querySelector(".generate").addEventListener("click", (e) => {
    document.querySelector(".text").innerHTML = `<h3 class="result">${generatePassword(amount, uppercase, symbols, numbers)}</h3>`
});