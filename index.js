// OBJECT

const character = { 
    name: "Spongebob",
    age: 18,
    isCartoon: true,
    sayhello: function() {console.log(`Hello ${this.name}!`)},
}

//console.log(character.age);
//character.sayhello();

// CONSTRUCTER

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(this)};
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
//car1.drive();

// CLASSES
// class = object + constucter
// 'super' is the same with java/c#
class Product{
    static id = 0;

    constructor(name, price){
        this.name = name;
        this.price = price;
        Product.id++;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    get price(){
        return this._price;
    }

    display(){
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}$`);
        console.log(`Id: ${Product.id}`);   
    }
}

const prd = new Product("Shirt", 9.99);
prd.display();
prd.price = 11.9;
prd.display();