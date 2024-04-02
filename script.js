let randomNumber1 = Math.floor(Math.random()*6)+1;
let diceImage = "dice"+randomNumber1+".png";
let diceFinal = "images/"+ diceImage;

let randomNumber2 = Math.floor(Math.random()*6)+1;
let diceImage2 = "dice"+randomNumber2+".png";
let diceFinal2 = "images/"+ diceImage2;

console.log(randomNumber1, randomNumber2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "&#128681 Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML = "&#129309 Draw"
}

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceFinal);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceFinal2)
