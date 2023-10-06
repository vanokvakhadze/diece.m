
var randomNumber1 =["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png" ];
var m = randomNumber1.length;
var xm = Math.random();
xm= xm*m;
xm= Math.floor(xm);
randomNumber1[xm];
var x = randomNumber1[xm];

var randomNumber2 =["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png" ];
var e = randomNumber2.length;
var g = Math.random();
g= g*e;
g= Math.floor(g);
randomNumber2[g];
var y = randomNumber2[g];

document.querySelector("img").setAttribute("src" , x);
document.querySelectorAll("img")[1].setAttribute("src" , y);

if(x > y){
    document.querySelector("h1").innerHTML = " Player 1 winner";
}else if(x === y ){
    document.querySelector("h1").innerHTML = " Draw ";
}else 
{
    document.querySelector("h1").innerHTML = " Player 2 winner";
}