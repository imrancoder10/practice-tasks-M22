/**
 * ### Task-5: 
Generate a random number between 10 to 20.

 */
// console.log(Math.round(Math.random()*11 + 10));

function randomNumbers(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

const resultOfRnadom = randomNumbers(10, 20);
console.log(resultOfRnadom);