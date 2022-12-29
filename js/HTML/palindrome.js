// let inputstring='mom';
// let newString=palindrome(inputstring);
// console.log(inputstring + 'is a palindrome'+newString);


// function palindrome(str){
//     let reversed=str.split().reverse().join('');
//     if(str===reversed){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function pallindrome(str){
    let reversed ='';
    for(char of str){
        reversed=char+reversed;
    }
    if(str===reversed){
        return true;
    }
    else{
        return false;
    }
}
let inputstring='mother'
let newString=pallindrome(inputstring);
console.log(inputstring + 'is a palindrome '+ newString);
