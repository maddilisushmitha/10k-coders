
var user={
    firstName:"sushmitha",
    lastName:"maddili",
    emailId:"maddilisushmitha@gmail.com",
    age:26,
    number:9900887766,
    getfullName: function(){
        return this.firstName+" "+this.lastName
    },
    getnumberaAndage:function(){
        return  `${this.number} is the correct number and ${this.age} is correct age`
    }

}

console.log(user);
console.log(user.getfullName());
console.log(user.number);
console.log(user.getnumberaAndage());

class car{
    constructor(name,brand,size,color,price){
        this.name=name;
        this.brand=brand;
        this.size=size;
        this.color=color;
        this.price=price;
      
    }
   checkTheCar(){
    if(this.name==="brezza"){
    console.log(`${this.name} is mycar`)
    }
    else {
        console.log(`${this.name} is sushma Car`)
    }

   }
}
let myCar=new car("brezza","kia","10 inches","blue","12 lakhs")
console.log(myCar)
myCar.checkTheCar();

let sushmaCar=new car("seltos","kia","10 inches","blue","12 lakhs")
sushmaCar.checkTheCar();