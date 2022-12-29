// const employee={
//     empID:1234,
//     empName:"sushmitha"
// }
// console.log(employee);
// const employee1=employee;
// console.log(employee1)


// class employee{
//     getDetails(){
//      console.log('with no parameter');
//     }
//     getDetails(empId){
//         console.log('with one parametr');
//     }
//     getDetails(empId,empName){
//         console.log('with two parameters');
//     }
// }

// let emp1=new employee();
// console.log(emp1);
// emp1.getDetails();
// emp1.getDetails(11,12)


class parentClass{
    constructor(name,id){
        this.name=name;
        this.id=id;
        console.log('this is parent class')
    }

}
class childClass extends parentClass{
constructor(name,id){
super(name,id);
console.log(`${this.name} this is child class`)
console.log(`${this.id} is child class`)
}
}
let parentObj= new parentClass('sushmitha','sushma');
let chldObj=new childClass('sushmitha','kiran');
console.log(parentObj)