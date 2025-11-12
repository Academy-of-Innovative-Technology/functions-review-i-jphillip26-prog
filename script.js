
// ===== FUNCTIONS WITH NO PARAMETERS ===== //
function sayHello(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Hello Hayat! Welcome to javascript functions review";
}

function showDate(){
    let output1 = document.querySelector("#output1");
    let today = new Date();
    output1.innerHTML = "Today's date is: " + today.toDateString();
}

function getMotivation(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "You got this! Keep coding and learning!";
}

function showRep(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "I rep aoit!";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //
function addNumbers(num1, num2){
    let output2 = document.querySelector("#output2");
    let sum = num1 + num2;
    output2.innerHTML = num1 + " + " + num2 + " = " + sum;
}

function greetPerson(name){
    let output2 = document.querySelector("#output2");
    output2.innerHTML = "Hello, " + name + "! Nice to meet you!";
}

function calculateArea(length, width){
    let output2 = document.querySelector("#output2");
    let area = length * width;
    output2.innerHTML = "Area of rectangle (" + length + " x " + width + ") = " + area;
}

function showFavoriteColor(color){
    let output2 = document.querySelector("#output2");
    output2.innerHTML = "Your favorite color is: " + color;
}

function celsiusToFahrenheit(celsius){
    let output2 = document.querySelector("#output2");
    let fahrenheit = (celsius * 9/5) + 32;
    output2.innerHTML = celsius + "°C = " + fahrenheit + "°F";
}

// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
document.querySelector(".sayHelloBtn").addEventListener("click", function(){
    sayHello();
});

document.querySelector(".showdateBtn").addEventListener("click", function(){
    showDate();
});

document.querySelectorAll("button")[2].addEventListener("click", function(){
    getMotivation();
});

document.querySelectorAll("button")[3].addEventListener("click", function(){
    showRep();
});

document.querySelectorAll("button")[4].addEventListener("click", function(){
    addNumbers(5, 7);
});

document.querySelectorAll("button")[5].addEventListener("click", function(){
    greetPerson("Alex");
});

document.querySelectorAll("button")[6].addEventListener("click", function(){
    calculateArea(10, 6);
});

document.querySelectorAll("button")[7].addEventListener("click", function(){
    showFavoriteColor("Blue");
});

document.querySelectorAll("button")[8].addEventListener("click", function(){
    celsiusToFahrenheit(25);
});
