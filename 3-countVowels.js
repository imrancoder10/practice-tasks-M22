/**
 * ### Task-3: 
Write a function to count the number of vowels in a string.

 */

function vowelsCount(str){
    vowelSelected = [];
    for(const letter of str){
        if( letter === 'a' || letter === 'A' ||
            letter === 'e' || letter === 'E' ||
            letter === 'i' || letter === 'I' ||
            letter === 'o' || letter === 'O' ||
            letter === 'u' || letter === 'U'){
                vowelSelected.push(letter);

            }        
    }
    return vowelSelected.length;
}

const sentence = 'I love you. janu'
const finalVowel = vowelsCount(sentence);
console.log(finalVowel);