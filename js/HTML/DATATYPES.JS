// let john={
//     name:"john",
//     sayHi:function(){
//         console.log('hi buddy')
//     }
// }
// john.sayHi();


// let str='hello';
// console.log(str.toUpperCase());


// let str1='HELLO';
// console.log(str1.toLowerCase());

// let num=1.23456;
// console.log(num.toFixed(3));


// let str='hello';
// str.test=5;
// console.log(str.test);
// let billion=10_0000_000;
// console.log(billion);
// num=1234;
// console.log(num.toString(2))

// let num=12.34;
// console.log(num.toFixed(3));

// console.log(1e5);
// console.log(0.1+0.2);

// let num=0.1+0.2;
// console.log(num.toFixed(10));


// let str='john';
// console.log(str[0].toUpperCase());

// let fruits=['mango','orange','grapes'];
// console.log(fruits[0]);
// fruits[1]='apple';
// console.log(fruits);

// let array=['apple',{name:'john'},3,true,function(){alert(hello);}];
// console.log(array[1]);
//  let fruits=['apple','mango','grapes']
//  fruits.pop;
//  console.log(fruits.pop());
//  console.log(fruits);
//  console.log(fruits.push('pineapple'));
//  console.log(fruits);
// 
// let fruits=['banana']
// let arr=fruits;
// console.log(arr===fruits);
// arr.push('pear');
// console.log(fruits);
// console.log(arr);
// let fruits=['apple','orange'];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// let styles=['jazz','blues'];
// styles.push('rock-n-roll');
// console.log(styles);


// let styles=['jazz','blues'];
// styles.push('rock-n-roll');

// // styles[Math.floor(styles.length-1)/2]='classics';
// console.log(styles);


// const strArray=['chanakya','sushmitha','kiran']
// console.log(strArray.join("-"));
// (strArray.push('kiran'));
// console.log(strArray);



// let array=[1,2,3,4,5,6,7,8]
// let max=array[0];
// for(let i=1;i<=array.length;i++){
//    if (array[i]>=max){
//     max=array[i];
//    }
// }
// console.log(max);


// let arr1=[1,2,3,4,5,6]
// let min=arr1[0];
// for(let i=1;i<=arr1.length;i++){
//    if (arr1[i]<=min){
//     min=arr1[i];
//    }
// }
// console.log(min);


// const strArray=['sushma','kiran','joswik']
// console.log(strArray.reverse());

// const strarray1=['sai','kiran','sushma','junnu'];
// console.log(strarray1.sort());

// const numArray=[1,11,22,3333,44,23,555];
// console.log(numArray.sort(function(a,b){
//     return b-a;
// }));
// const numArray=[1,2,3,4];
// numArray.forEach(function(value,index){
//     console.log(value,index);
// })


// const numArray=[1,2,3,4,5,888]; 
// // const numArray1=numArray.map(function(value,index){
// // console.log(value*2,index);
// // }
// // );
// // console.log(numArray);
// // console.log(numArray1);
// numArray.filter(function(value){
//     if(value%2==0){
//         console.log(value);n
//     }
// }

// )


// let str='sir'
// function reverse(){
//     let myReverseStr='';  
//     for(let i=str.length-1;i>=0;i--){
//         myReverseStr += str.charAt(i);
//     }
//     return myReverseStr;
// }
// // console.log(reverse());

// if(str===reverse()){
//     console.log('it is palindrome');
// }else{
//     console.log('it is not palindrome');
// }
// Array.map(sir)




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


// let arr=['i','you','me'];
// arr.splice(1,1);
// console.log(arr);

// let arr=['i','sush','daughter','of','me'];
// arr.splice(0,3,'lets','dance')
// console.log(arr)

// let arr=[1,0,false,1];
// console.log(arr.lastIndexOf(1));

// const arr=[NaN];
// console.log(arr.indexOf(NaN));

// let arr=[1,2,3,4,5]
// arr.reverse();
// console.log(arr);

// let str='test';
// console.log(str.split(''));

// let arr=['man','woman','child'];
// let str=arr.join(';');
// console.log(str);

let map=new Map();
map.set('name','john');
let keys=Array.from(map.keys());
keys.push('more');
console.log(keys);