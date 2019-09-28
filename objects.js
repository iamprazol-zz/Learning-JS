/*
// Declaring Objects

const circle = {
  radius : 1,
  location : {
      x : 1,
      y : 1,
  },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();



// Declaring Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);



// Declaring Constructor Function
function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle2 = new CreateCircle(10);
console.log(circle2);



//Dynamic Nature Of Objects
const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function () {
    console.log('draw');
};

delete circle.color;
console.log(circle);



//Enumeration Properties Of Objects
const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for(let key of Object.keys(circle))
    console.log(key);

for(let entry of Object.entries(circle))
    console.log(entry);

// Cloning An Object
const another = Object.assign({
    color : 'yellow'
}, circle);
console.log(another);

const another = { ...circle };
console.log(another);

*/



