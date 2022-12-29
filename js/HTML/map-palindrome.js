// let str='mom';
// let map=Array.prototype.map;
// let newString=map.call(str,function(x){
//     return x;
// }).reverse().join('');
// if(str===newString){
//     console.log( str + " " +'is palindrome')
// }
// else {console.log(str + " " +'not palindrome')
// }



// //max value
// let array=[1,2,3,4,5,6,7,8]
// let max=array[0];                                   
// for(let i=1;i<=array.length;i++){
//    if (array[i]>=max){
//     max=array[i];
//    }
// }
// console.log(max);

// //min value`
// let arr1=[1,2,3,4,5,6]
// let min=arr1[0];
// for(let i=1;i<=arr1.length;i++){
//    if (arr1[i]<=min){
//     min=arr1[i];
//    }
// }
// console.log(min);
  
// function isPalindrome(str){
//     let result='';
//     let splittedText=text.split('');
//     console.log(splittedText);
// }
// isPalindrome('nitin')





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


// let map=new Map();
// map.set('empId','1234');
// map.set('empName','sushmitha');
// map.set('designation','software');
// map.set('salary','100000');
// map.set('contact-number','9999999999');
// map.set('father-name','M.mohanRao');
// map.set('mother-name','sakuntala');
// map.set('experience','0');
// map.set('qualification','b-tech')
// console.log(map);
// // map.clear();
// // map.delete('empId')
// // console.log(map.get('empId'));
// for(let property of map()){
//     console.log(property);
// }



// let numArray=[1,1,2,2,3,3,4,4,5,5,6,6,7,7]

// let setObj=new Set(numArray);
// console.log(setObj);
// setObj.add(1);
// setObj.add(2);
// setObj.add(3);
// console.log(setObj.delete(7));

// let weakMap=new WeakMap();
// weakMap.set({1:1},'testvalue');
// console.log(weakMap);

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
