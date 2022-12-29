
// let a=10;
// console.log(a);

let count=0;
let array = ["i","am","sushmitha","i","am","26years"];
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            count++
            break;
        }
    }
}
console.log("duplicate values::" + count);

let abc='sushmitha kiran barla sasi';
console.log(abc)
let output=abc.split(" ").reverse().join(" ");
console.log(output);



let xxx='sushmitha maddili'
console.log(xxx);
let xxxx=xxx.split("").reverse().join();
console.log(xxxx)