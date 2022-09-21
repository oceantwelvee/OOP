//Factory Functions;
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw");
        }        
    };
}

const circle = createCircle(1);

Constructor Functions;

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}



const another = new Circle(1);

let x = { value: 10 }; // При вызове с конкретным значением value x меняется - это называется примитивами 
let y = x;

x.value = 20;
// --------------->//

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);


// Adding/Removing Properties;

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle(1);
circle.location = {x: 1}; // Добавили в объект circle location: x: 1;

// Добавление свойств

const propertyName = ['center location'];
circle[propertyName] = {x: 1};

// Удаление свойств;

delete circle.location;


// Enumarating Properties;

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle(1);

for(let key in circle) {
    if(typeof circle[key] !== "function")
         console.log(key, circle[key]);
}

const keys = Object.keys(circle); // находит ключей
console.log(keys);


// Абстракция - Abstraction

function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {x: 1, y: 1};

    this.computeOptimumLocation = function(factor) {
        //.....
    }

    this.draw = function() {
        this.computeOptimumLocation(0.1);
        console.log("draw");
    }
}

const circle = new Circle(1);
circle.draw();

// Private Properties and Methods;

function Circle(radius) {
    let color = "red";

    this.radius = radius;
    let defaultLocation = {x: 1, y: 1};// Используя let мы закрыли доступ на defaultLocation,сейчас она по умолчанию...

    let computeOptimumLocation = function(factor) {
        //.....
    }

    this.draw = function() {
        let x,y;
        computeOptimumLocation(0.1);
        // defaultLocation

        // this.radius;

        console.log("draw");
    }
}

const circle = new Circle(1);

circle.draw();

// Getters/Setters
function Circle(radius) {
    let color = "red";

    this.radius = radius;
    let defaultLocation = {x: 1, y: 1};

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        //let x,y;
        // computeOptimumLocation(0.1);
        // defaultLocation

        // this.radius;

        console.log("draw");
    };

    Object.defineProperty(this, "defaultLocation", { // Находит свойства в объектах
        get: function(){
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
                defaultLocation = value;
        }
    });
}

const circle = new Circle(1);
circle.defaultLocation = 0;
circle.draw();
