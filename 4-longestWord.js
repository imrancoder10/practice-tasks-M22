/**
 * ### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming

 */


function longestWords(str){
    const words = str.split(' ');
    let longestWordSelect = '';
    for(const word of words){
       if(word.length > longestWordSelect.length){
        longestWordSelect = word;
       }
    }
    return longestWordSelect;
}


const sentence = "I love you programmer";
const result = longestWords(sentence);
console.log(result);
