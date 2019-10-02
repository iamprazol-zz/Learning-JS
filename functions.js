// Function Declaration
function walk() {
    console.log('walk');
}

walk();



// Function Expression
let run = function () {
    console.log('run');
};
run();



// Implementing Sum Of All Arguments
function sum() {
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5));


// The Rest Operator
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));



// Default Parameters
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years
}

console.log(interest(10000));



// Getters And Setters
const person = {
    firstName: 'Prajjwal',
    lastName: 'Poudel',
    get fullName() {
     return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);
person.fullName = 'Sam Smith';
console.log(person.fullName);


// Error Handling
const person = {
    firstName: 'Prajjwal',
    lastName: 'Poudel',
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}

console.log(person.fullName);



// The This Keyword
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.stop = function () {
    console.log(this);
};

video.play();
video.stop();
