// Program to find if an image is landscape or not
console.log(isLandscape(100, 50));
function isLandscape(width, height){
  return (width > height) ? 'landscape' : false;
}



// Fizzbuzz algorithm
const output = fizzBuzz('hello');
console.log(output);

function fizzBuzz(input) {
  if(typeof input != 'number') return  'Not a number';
  else if(input%3 == 0 && input%5 == 0) return 'FizzBuzz';
  else if(input%3 == 0) return 'Fizz';
  else if(input%5 == 0) return 'Buzz';
  else if(input%3 != 0 || input%5 != 0) return input;

}



// Demerit implementation
let speedLimit = 70;
function checkSpeed(speed) {
  if (speed < speedLimit + 5){
    return 'Okay';
  } else {
    points = Math.floor((speed - speedLimit) / 5);
    if(points >= 12)
      return 'License suspended';
    else
      return points;
  }
}
console.log(checkSpeed(69));




// Print Odd and Even numbers
function showNumbers(limit){
  for(let i=0; i<=limit; i++){
    const message = (i%2 ===0) ? i + ' Even' : i + ' Odd';
    console.log(message);
  }
}

showNumbers(1000);



// Implementing for loop
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function showProperties(obj) {
  for(let key in obj)
    if(typeof obj[key] === 'string')
      console.log(key, obj[key]);
}



// Add numbers from 1 to 10 which are divisible by 3 and 5
console.log(sum(10));
function sum(limit) {
  add = 0;
  for(let i=0; i<=limit; i++){
    if(i%3 === 0 || i%5 === 0) {
      add = add + i;
    }
  }
  return add;
}



// Find Grade
const marks = [61, 80 , 50, 20, 100];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  for(let mark of marks)
    sum += mark;

  avg = sum / marks.length;

  if(avg <= 59)
    return 'F';
  if(avg >= 60 && avg <= 69)
    return 'D';
  if(avg >= 70 && avg <= 79)
    return 'C';
  if(avg >= 80 && avg <= 89)
    return 'B';
  if(avg >= 90 && avg <= 100)
    return 'A';

}



// Patterns
showStars(100);

function showStars(rows) {
  for(let i=1; i<=rows; i++){
    let pattern = '';
    for(let j=1; j<=i; j++){
      pattern += '*';
    }
    console.log(pattern);
  }
}



// List Prime Numbers
showPrimes(200000);
function showPrimes(number) {
  for(let i=2; i<=number; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if(i%j === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) console.log(i);
  }
}

