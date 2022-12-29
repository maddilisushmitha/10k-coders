let map=new Map();
map.set('empId','1234');
map.set('empName','sushmitha');
map.set('designation','software');
map.set('salary','100000');
map.set('contact-number','9999999999');
map.set('father-name','M.mohanRao');
map.set('mother-name','sakuntala');
map.set('experience','0');
map.set('qualification','b-tech')
console.log(map);
// map.clear();
// map.delete('empId')
// console.log(map.get('empId'));
for(let property of map()){
    console.log(property);
}




let strArray=[];
let setObj=new Set(strArray);
// console.log(setObj);
setObj.add('empName:sushmitha');
setObj.add('empId:sushmitha');
setObj.add('empDesignation:developer');
setObj.add('empNumber:9999999999');
setObj.add('empGender:female');
setObj.add('empFatherName:mohanrao');
setObj.add('empMotherName:sakuntala');
setObj.add('empaddress:tanuku');
setObj.add('empcode:535001');
console.log(setObj);
// for (const property of setObj){
//     console.log(property);
// }




// let array=['sushmitha','amma','nitin'];
// let result=array.filter(function(value){
//     if(isPalindrome(value)==='palindrome'){
//         console.log(`${value} is palindrome`)
//     }
// });
// function isPalindrome(text){
//     let result="";
//     result=text.split('').reverse().join('');
//     if(result=== text){
//         return `palindrome`;
//     }else{
//         return `not palindrome`;
//     }
// }