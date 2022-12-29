class Car{
    constructor(name,brand){
        this.brand=brand;
        this.name=name;
        console.log(this)
    }
    costOfTheCar(){
        if(this.brand==="hyundai"){
            console.log(`${this.brand} costs 10 lakhs`)
        }else if(this.brand==="seltos"){
            console.log(`${this.brand} costs 9 lakhs`)
        }else 
            console.log(`${this.brand} is not defined`)
        
    }
    

}

var myCar=new Car("tata","kia")
console.log(myCar.name);
console.log(myCar.brand);
myCar.costOfTheCar();