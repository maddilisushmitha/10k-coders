// function changeColor(){
//     document.body.style.backgroundColor="#"+((Math.floor(Math.random()*1000001)))
// }
const btn=document.querySelector("#btn")


 function changeColor(){
 document.body.style.backgroundColor=`#${Math.random().toString(16).slice(-6)}`
 document.body.style.button.Color=`#${Math.random().toString(16).slice(-6)}`
 }

// function xyz(a,b){
//     return a+b;
// }
// console.log(xyz(2,3))
// xyz();


// let xyz2=()=>{console.log('this is arrow');}
// xyz2()

// function xyz5(){
//     console.log('this is function')
// }
// xyz5();
// let x;
// console.log(x??"sushmitha")

// {
//     var a=10;
    
// }
// console.log(a)

// function abc(){

// }


// let xyz1=(a,b)=>{a*b}
// console.log(xyz1(15,1))

let a=15;
let xyz=()=>{
    for(let i=1;i<=10;i++){
        console.log(`${a}*${i}=${a*i}`)
    }
}
xyz();