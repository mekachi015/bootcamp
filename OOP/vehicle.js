class Vehicle{

    constructor(name, maker, engine){ //both default and empty
        
        this.name = name;
        this.maker =maker;
        this.engine = engine;
    } 
    getDetails(){
        return("The name of the vehicle is:" + this.name)
    }
}

//object creation should be outside the class 

let sedan = new Vehicle("Atios", "Toyota", "1.4");

console.log(sedan.name);
console.log(sedan.engine)
console.log(sedan.maker)