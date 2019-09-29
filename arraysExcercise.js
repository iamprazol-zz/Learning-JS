// Array From Range
const numbers = arrayFromRange(-10, 10);
console.log(numbers);

function arrayFromRange(min, max) {
    const array = [];
    for(let i = min; i <= max; i++ ){
        array.push(i);
    }
    return array;
}



// Implementing Include
const numbers = [1, 2, 3, 4];

console.log(include(numbers, 1));
function include(array, searchElement) {
    for(let key in array)
        if(array[key] === searchElement) return true;
        return false;
}



// Implementing Except
const numbers = [1, 2, 3, 4];

console.log(except(numbers, [2, 3]));
function except(array, excluded) {
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
        return output;
}



// Moving An Element
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 3);
console.log(output);

function move(array, index, offset) {
    for (let element of array){
        if (array.indexOf(element) === index) {
            array.splice(index, 1);
            array.splice(offset, 0, element);
            return array;
        }

    }
}



// Count Occurrences
const numbers = [1, 2, 3, 1, 4, 1, 2, 2, 2];

const count = countOccurrences(numbers, 2);
console.log(count);

function countOccurrences(array, searchElement) {
    if(array.includes(searchElement)){
        let count = 0;
        for(i = 0; i <= array.length; i++){
            if(array[i] === searchElement){
                count ++;
            }
        }
        return count;
    }
}



// Get Max
const numbers = [1, 4, 2, 0];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if(array.length === 0) return undefined;
    return array.reduce((a ,b) => (a > b) ? a : b);

}



// Movies
const movies = [
{ title: 'a', year: 2018, rating: 4.5},
{ title: 'b', year: 2018, rating: 4.7},
{ title: 'c', year: 2018, rating: 3},
{ title: 'd', year: 2017, rating: 4.5},
];

const output = movie(movies);
console.log(output);

function movie(array) {
    return array
        .filter(m => m.year === 2018 && m.rating >= 4 )
        .sort((a,b) => a.rating - b.rating)
        .reverse()
        .map(m => m.title);
}