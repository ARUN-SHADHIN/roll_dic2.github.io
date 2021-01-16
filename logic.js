'use strict';
const btnRoll=document.querySelector("#btn");
const btnel=document.querySelector("#dice");


let currentScore1=0;
let currentScore2=0;
let number,count1=1,count2=1,currentPlayer=1;
let player1= false;
let player2=false,check,check1;

function generateRandom(){
    const dice=Math.trunc(Math.random()*6)+1;
    return dice;
}
function playertatus1(){
    if(!player1)
        return false;
    else
        return true;
}
function playertatus2(){
    if(!player2)
        return false;
    else
        return true;
}
function resetall(){
    player1=false;
    player2=false;
    currentScore1=0;
    currentScore2=0;
    currentPlayer=1;count1=1;count2=1;
    document.querySelector('.score2').textContent=currentScore2;
    document.querySelector('.score1').textContent=currentScore1;
    document.querySelector('.player1').textContent="???";
    document.querySelector('.player2').textContent="???";
}

function firstName(){
    return  (document.querySelector('.first').value).toUpperCase();
} 

function secondName(){
    return (document.querySelector('.second').value).toUpperCase();
}


document.querySelector('.add').addEventListener('click',function(){
    var second=document.querySelector('.second').value;
    document.querySelector('.player1').textContent=firstName();
    document.querySelector('.player2').textContent=secondName();
})

function firstPlayer(number){
    currentScore1 += number;
            btnel.src=` dice-${number}.png`;
            document.querySelector('.score1').textContent=currentScore1;
            console.log("total = "+currentScore1);
            document.querySelector('.current').textContent=firstName().toUpperCase();
}

function secondPlayer(number){
    currentScore2 += number;
            btnel.src=` dice-${number}.png`;
            document.querySelector('.score2').textContent=currentScore2;
            console.log("total = "+currentScore2);
            document.querySelector('.current').textContent=secondName();
}

document.querySelector('.hold1').addEventListener('click',function(){
    if(count2==0){
        currentPlayer=1;
    }
    else{
        if(count2==1)
            currentPlayer=2;
    }
})

document.querySelector('.hold2').addEventListener('click',function(){
    if(count1==0)
        currentPlayer=2;
    else{
        if(count1==1)
            currentPlayer=1;
    }
})


btnRoll.addEventListener('click',function(){
    if(player1==true && player2==true){
        if(currentScore1 >currentScore2)
            document.querySelector('.player1').textContent="congratulation "+firstName().toUpperCase();
        else{
            document.querySelector('.player2').textContent="congratulation "+secondName();
        }  
    }
    else {
    number=generateRandom();
    btnel.src=` dice-${number}.png`;
    if(currentPlayer==1 && count1==1){
    if(!playertatus1()){
        if(number != 1)
            firstPlayer(number);
    else{
            player1=true;
            count1=0;
            currentPlayer=2;
        }
    }
}
     else if(currentPlayer==2 && count2==1){
            if(!playertatus2()){
                if(number != 1)
                    secondPlayer(number);
                else{
                    player2=true;
                    count2=0;
                    currentPlayer=1;
                }
            }
        }

    }
})
document.querySelector('.formating').addEventListener('click',function(){
    resetall();
})

