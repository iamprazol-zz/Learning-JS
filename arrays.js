// Adding Elements
const numbers = [3,4];
// End
numbers.push(5,6);
// Begining
numbers.unshift(1,2);
// Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);



// Finding Primitive Elements
const numbers = [1, 2, 1, 3, 4];
console.log(numbers.indexOf('1'));
console.log(numbers.includes(1));
console.log(numbers.indexOf(1, 2));



// Finding Reference Types Elements
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

console.log(courses.includes({id: 1, name:'a'})); // Doesnot works

console.log(courses.find(function (element) {
    return element.name === 'a';
}));



// Arrow Functions
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

console.log(courses.includes({id: 1, name:'a'})); // Doesnot works

console.log(courses.find(course => course.name === 'a'));



// Removing Elements From Array
const numbers = [1, 2, 3, 4];
// End
const last = numbers.pop();
console.log(last);
// Beginning
const first = numbers.shift();
console.log(first);
// Middle
numbers.push(4,5,6,7);
numbers.splice(1,1);
console.log(numbers);



// Combining And Slicing Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2, 4);
console.log(slice);



// The Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b'];
console.log(combined);



// Iterating An Array
const numbers = [1, 2, 3, 4];

numbers.forEach(number => console.log(number));
numbers.forEach(number => console.log(index, number));



// Joining Arrays
const numbers = [1, 2, 3, 4];
const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts.join('-'));



// Sorting Arrays
const numbers = [3, 2, 4, 1];
console.log(numbers.sort());
console.log(numbers.reverse());

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javascript'}
];

courses.sort(); // Doesnot works

courses.sort(function (a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courses);



// Testing The Elements Of An Array
const numbers = [1, -2 ,3];

const allPositive = numbers.every(function (value) {
   return value >= 0;
});

const atLeastOnePositive = numbers.some(function (value) {
   return value >= 0;
});
console.log(allPositive);
console.log(atLeastOnePositive);



// Filtering An Array
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(value => value >= 0);

console.log(filtered);



// Mapping An Array
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(value => value >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

console.log(filtered);
console.log(items);
console.log(html);

const item = filtered.map(n => {
    return obj = { value: n};
});

console.log(item);



// Reducing An Array
const numbers = [1, -1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);
