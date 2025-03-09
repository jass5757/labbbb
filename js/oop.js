const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    var obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(", ")}.`;
    };
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .bio() */
let person1 = createNewPerson("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);
output.textContent = person1.bio();

/* STEP 2a: Rewrite the above function as a constructor function */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(", ")}.`;
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword */
let person2 = new Person("John", "Doe", 25, "Male", ["reading", "gaming", "coding"]);
output2.textContent = person2.bio();

/* STEP 3a: Build the complete constructor for the object Person */
// Already done in STEP 2a.

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person3 = new Person("Jane", "Doe", 30, "Female", ["painting", "traveling", "yoga"]);

/* STEP 3c: Access the various properties of person1 using the console */
// Uncomment the following lines to test in the console:
// console.log(person1['age']); // 16
// console.log(person1.interests[1]); // "dancing"
// console.log(person1.bio()); // Bio string

/* STEP 4a: Use the Object() constructor to create an object */
let car = new Object();

/* STEP 4b: Add various properties and methods to the car object */
car.brand = "Honda";
car.model = "Civic";
car.fun = function () {
    return `This is a ${this.brand} ${this.model}.`;
};

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */
// Uncomment the following lines to test in the console:
// car.brand = "Toyota";
// console.log(car.fun()); // "This is a Toyota Civic."

/* STEP 5a: Use the create() method to create another object */
let anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand */
output2.textContent += ` Another car: ${anotherCar.brand} ${anotherCar.model}.`;

/* STEP 6: Create a Hamburger object */
function Hamburger(bun, vegetables, cheeses, sauces, patty, pattyCount, extras) {
    this.bun = bun;
    this.vegetables = vegetables;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.patty = patty;
    this.pattyCount = pattyCount;
    this.extras = extras;
    this.describe = function () {
        return `This hamburger has a ${this.bun} bun, ${this.pattyCount} ${this.patty} patty(s), topped with ${this.vegetables.join(", ")}, ${this.cheeses.join(", ")}, ${this.sauces.join(", ")}, and extras like ${this.extras.join(", ")}.`;
    };
}

// Example usage:
let myHamburger = new Hamburger(
    "sesame seed",
    ["lettuce", "tomato", "onion"],
    ["cheddar", "swiss"],
    ["mayo", "ketchup"],
    "beef",
    2,
    ["pickles", "olives"]
);

output.textContent += " " + myHamburger.describe();