/*

This program uses Javascript to simulate the game of Yahtzee.

Yahtzee counts the number of tries it takes to roll 
five dice till they all match the same number.

This code consists of a function that simulates rolling a group 
of dice and another function that keeps count of the tries.

*/

const prompt = require('prompt-sync')();

//function to simulate rolling the dice
function rollDice(){ 
    
    //generate a random number between the range of 0 and 1
    var randomNumber = Math.random();
    
    //Change the range to 0 - 6 
    randomNumber = randomNumber * 6;
    
    //Shift the range up by 1, i.e, 1 - 7
    randomNumber = randomNumber + 1;
    
    //truncate the decimal part of the number
    let randomInt = randomNumber | 0;

    return randomInt;
}

//main logic of the game
function keepRolling(){
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();
    let dice4 = rollDice();
    let dice5 = rollDice();
    var count = 1;

    while(!(dice1 === dice2 && dice2 === dice3 && dice3 === dice4 && dice4 === dice5)){
        dice1 = rollDice();
        dice2 = rollDice();
        dice3 = rollDice();
        dice4 = rollDice();
        dice5 = rollDice();
        count += 1;
    }

    return count;
}

const name = prompt('What is your name?:');
console.log("Congratulations " + name, ", You got a Yahtzee in " + keepRolling() + " tries!");


