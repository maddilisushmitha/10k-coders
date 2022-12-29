function abc(a,b){
    return a+b;
}
console.log(abc(2,3));

//2 one

function convert(minutes){
    return minutes*60;
}
console.log(convert(1));
console.log(convert(2));

//3 one

function abc(a){
return a+1;
}
console.log(abc(4))

//4 one

function age(years){
    return years*365
}
console.log(age(2));

//5 one

function power(voltage,current){
    return power=voltage*current
}
console.log(power(20,30));

//6 one

function abc(a){
    return "something" + " " + a
}
console.log(abc('sushmitha'));

//7 one

function abc(a,b){
    if (a===10){
        return true;
    }else if(b===10){
        return true;
    }else if(a+b===10){
        return true
    }else
    return false
}
console.log(abc(2,3));
console.log(abc(10,2))


//8 one


// 9 one

function a(name){
    return `hello ${name}`;
}
console.log(a('sushma'));
function change(user){
    return `hello ${user}`;
}
console.log(change('kiran'))

//10 one

// function phonenumber(numbers){
//     let firstPart=numbers.slice(0,6).join("");
//     let secondPart=numbers.slice(0,6).join("");
//     let lastPart=numbers.slice(0,6).join("");
//     return("("+firstPart+")"+" " +secondPart+"-"+lastPart);
// }
// console.log(phonenumber(0,1,2,3,4,5,6,7,8,9));

//11 one

var arr=["a","ccc","dddd","bb"]
for(var i=1;i<=arr.length;i++){

}
console.log(arr.sort());

//12 one
 var arr=[20,30,50];
var max=arr[0]
for(var i=0;i<=arr.length;i++){
    if(arr[i]>=max){
        max=arr[i];
    }
    
}
console.log(max);

var arr=[2,3,4];
var min=arr[0]
for(var i=0;i>=0;i--){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)

//13 one



//14 one
let v=[1,2,3,4,1,2,3];
let n=[];
for(let i=0;i<v.length;i++){
    if(n.indexOf(v[i])===-1){
        n.push(v[i]);
    }
    
}
console.log(n);

//15(doubt)
let s=[2,2,2,3,4,4,4,4];
let p=[];
for(let i=0;i<s.length;i++ ){
    if(p.indexOf(s[i])>0){
        p.push(s[i])
    }
}
console.log(p);

//16

// let str='C,chamber of secrets';
// let map=new Map();
// for(let i=0;i<str.length;i++){
//     let char=str.charAt(i)
//     if(map.has(char)){
//     let value=map.get(char)
//     map.set(char,value+1)
//     }else{
//         map.set(char,1)
//     }
  
// }
// console.log(map)

// let str='sseerolkd is the pppp';
// let map=new Map();
// for(let i=0;i<str.length;i++){
//     let char=str.charAt(i)
//     if(map.has(char)){
//         let value=map.get(char)
//         map.set(char,value+1)
//     }else{
//         map.set(char,1)
//     }
// }
// console.log(map)

//17 one

let str='celebration'
let map=new Map();
for(let i=0;i<str.length;i++){
    let char=str.charAt(i)
    if(map.has(char)){
        let value=map.get(char)
        map.set(char,value+1)
    }else{
        map.set(char,1)
    }
}
console.log(map);

let aaa='celebration';
let reg=/[aeiou]/gi;
var count=aaa.match(reg)
console.log(count);


let aaa1='string'
var reg1=/[aeiou]/gi;
var count1=aaa1.match(reg1);
console.log(count1);

//18 one
let abc2='happy birthday';
let c=abc2.toLocaleUpperCase();
console.log(c)

//19 one


//21 one

let x='1';
let y='2';
let z='3';
let xy=Math.max(x,y,z);
console.log(xy)

//22 one
 var num=5;
 var fact=1;
 for(var i=1;i<=num;i++){
    fact=fact*i;
 }
 console.log(fact);

 //23 one

 let g=[1,4,3,6,8,9,13,9,2]
 console.log('unsorted array',g)
 g.sort((a,b)=>a-b);
 console.log('sorted array:',g);

 let o=[2,3,4,2,1,5,9,8,7,5];
 console.log('unsorted array:',o);
 o.sort((a,b)=>b-a);
 console.log('sorted array:',o)

 //25

 
 //26

 function isPrime(num5){
    if(num5<2){
        return false;
    }else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num5%i==0){
return false
            }
        }
    }
    return true
 }
  let num5=89;
  let result=isPrime(num5);
  if(result==false){
    console.log(num5,'is not a prime number')
  }
  else{
    console.log(num5,'is aprime number')
  }

  //27
  let ca=5;
  let b=1;
  for(i=1;i<=ca;i++){
       b=b*i;
  }
 console.log(b)

//fibanicco series
 const number = parseInt(prompt('Enter the limit : '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
