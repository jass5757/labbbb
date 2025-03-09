const output = document.getElementById('output');

// STEP 1: Create the person object
let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 16,
    gender: "Male",
    address: "1 Georgian Drive",
    interests: ["swimming", "reading", "dancing"],
    greeting: function () {
        alert(`Hello ${this.name.firstName}, How are you?`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, living at ${this.address} are ${this.interests.join(", ")}.`;
    }
};

// STEP 5a: Display the bio in the output element
output.textContent = person.bio();

// STEP 7: Access address using bracket notation
console.log(person["address"]);

// STEP 8: Update age
person.age = 80;

// STEP 9a: Add eye color
person.eyeColor = "Green";

// STEP 9b: Add a goodbye function
person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
};

// STEP 10: Dynamically set hair color
let key = "hairColor";
let value = "Black";
person[key] = value;

// STEP 11a: Create two new objects with name and hello function
let person1 = {
    name: "P1",
    hello: function () {
        alert(`Hello, this is ${this.name}.`);
    }
};

let person2 = {
    name: "P2",
    hello: function () {
        alert(`Hello, this is ${this.name}.`);
    }
};

// STEP 11b: Call the hello function for both objects
person1.hello();
person2.hello();