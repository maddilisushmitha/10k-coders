// const employee={
//     empId:123,
//     empFirstName:'sushmitha',
//     firstName:'sushmitha',
//     lastName:'maddili',
//     phoneNumber:'999999999',
//     designation:'s/w-engineer',
//     123:'123',
//     fullname:function(){
//         return this.empFirstName + " " + this.lastName} ,
// }
// console.log(employee);
// console.log(employee.empFirstName);
// console.log(employee['123']);
// console.log(employee.fullname());
     



// const person={
//     name:'sushmitha',
//     firstName:'susmitha',
//     lastName:'maddili',
//     email:'maddilisushmitha@gmail.com',
//     phoneNumber:99009900990,
//     qualification:'b-tech',
//     place:'vizianagarm',
//     address:'kothapeta water-tank,vzm(dst)',
//     FatherName:'M.MohanRao',
//     Mothername:'M.sakuntala',
//     fullname:function(){
//         return this.lastName + " " + this.firstName},
// }
// console.log(person);
// console.log(person.name);
// console.log(person.lastName);
// console.log(person.fullname());
// console.log(person.phoneNumber);
// console.log(person.qualification);
// console.log(person.FatherName);
// console.log(person.Mothername);



// let strArray=[
//     "sushmitha",
//     "kiran",
//     "joswik",
//     "sandeep",
//     "sunil",
//     "sravanti",
//     "sukumar",
//     "saideepak",
//     "sakuntala",
//     "mohanrao",
// ]
// console.log(strArray.length);
// for(let object=0;object<strArray.length; object++)
//   console.log(strArray[object]);



// let numberArray=[
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10

// ]
// console.log(numberArray.length);
// for(index=0;index<numberArray.length;index++)
// console.log(index + " " +""+ numberArray[index]);


// let strArray=[
//         'even',
//         'odd',
//         'even',
//         'odd',
//         'even',
//         'odd',
//         'even',
//         'odd',
//         'even',
//         'odd',
// ]
// console.log(strArray.length);
// console.log(strArray);
// for(index=0;index<strArray.length;index++)
// console.log(index + " " + strArray[index]);
// // for(index=0;index<strArray.length;index++);
// // console.log(strArray + " " + strArray[index]);





// function evenOdd(num){
//     if (num%2==0){
//         return num + " " + 'even';
    
//     }
//     else{
//         return num + " " + 'odd';
//     }
//     }
//     console.log(evenOdd(0));
//     console.log(evenOdd(1));
//     console.log(evenOdd(2));
//     console.log(evenOdd(3));
//     console.log(evenOdd(4));
//     console.log(evenOdd(5));
//     console.log(evenOdd(6));
//     console.log(evenOdd(7));
    


// let strArray=[
//     'sushmitha',
//     'sasikir(an',
//     'siddarth joswik'
// ]
// console.log('sushmitha'.length);
// console.log('sasikiran'.length);
// console.log('siddarth joswik'.length);
let numbers=[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,


]
function prime(number){
    let s=Math.sqrt(number)
    for(let i=2;i<=s;i++){
        if(number%i===0) return false;
    }
    return number>1;
}
for(const number of numbers ){
    console.log( number + "is prime: " + prime(number));
}