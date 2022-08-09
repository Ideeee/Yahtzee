/*

This program uses Javascript to simulate the game of Yahtzee.

Yahtzee counts the number of tries it takes to roll 
a group of dice till they all match the same number.

This code consists of a function that simulates rolling a group 
of dice and another function that keeps count of the tries.

*/

const prompt = require('prompt-sync')();


function rollDice(){ //function to simulate rolling the dice
    
    var randomNumber = Math.random();

    randomNumber = randomNumber * 6;

    randomNumber = randomNumber + 1;

    let randomInt = parseInt(randomNumber, 10);
    //let randomInt = randomNumber | 0;

    return randomInt;
}

function keepRolling(){
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();
    let dice4 = rollDice();
    var count = 1;

    while(!(dice1 === dice2) && !(dice2 === dice3) && !(dice3 === dice4)){
        dice1 = rollDice();
        dice2 = rollDice();
        dice3 = rollDice();
        dice4 = rollDice();
        count += 1;
    }

    return count;
}

const name = prompt('What is your name?:');
console.log("Congratulations " + name, ", You got a Yahtzee in " + keepRolling() + " tries!");


