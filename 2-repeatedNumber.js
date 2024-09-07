/**
 * ### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

function repeatedNumber(numbers, find){
    const findOutNumbers = [];
    for(const number of numbers){
        if(number === find){
            findOutNumbers.push(number);
        }
    }
    return findOutNumbers.length;
}

const arrayNumbers= [5, 6, 9, 87, 56, 5, 6, 20, 6, 8, 5, 87];
const result = repeatedNumber(arrayNumbers, 7);
console.log(result);