class Car{
    constructor(name,brand,color,texture,size,height,weight,width){
        this.name=name;
         this.brand=brand;
         this.color=color;
         this.texture=texture;
         this.size=size;
         this.height=height;
         this.weight=weight;
         this.width=width;
         console.log(this);
    }
    costOfTheCar(){
        if(this.brand==="hyundai"){
          console.log(`${this.brand} costs 10 lakhs`)
        }else if(this.brand==="kia"){
            console.log(`${this.brand} costs 12 lakhs`)
        }else{
            console.log(`${this.brand} costs 2 lakhs`)
        }
    }

    colorOfTheCar(){
        if(this.color==="red"){
            console.log(`${this.color} is hyundai`)
        }else if(this.color==="purple"){
            console.log(`${this.color} is punch`)
        }else if(this.color==="null"){
            console.log(`${this.color} not defined`)
        }

        }
    }


let myCar=new Car("i20 asta","hyundai","black","soft","large","55 inches","193 kgs","70 inches");
console.log(myCar.name);
console.log(myCar.brand);
console.log(myCar.color);
console.log(myCar.texture);
console.log(myCar.size);
console.log(myCar.height);
console.log(myCar.weight);
console.log(myCar.width);




let sushmaCar=new Car("punch","tata","purple","soft","large","53 inches","190kgs","70 inches")
sushmaCar.colorOfTheCar()

let rakeshCar=new Car("brezza","hyundai","green","soft","large","51 inches","180kgs","71 inches")
console.log(rakeshCar.name);
console.log(rakeshCar.brand);
console.log(rakeshCar.color);
console.log(rakeshCar.texture);
console.log(rakeshCar.size);
console.log(rakeshCar.height);
console.log(rakeshCar.weight);
console.log(rakeshCar.width);

let soumyaCar=new Car("brezza","hyundai","green","soft","large","51 inches","180kgs","71 inches")
console.log(soumyaCar.height);

let kiranCar=new Car("alto","maruti","blue","hard","small","50 inches","150kgs","60 inches")
console.log(kiranCar.width);