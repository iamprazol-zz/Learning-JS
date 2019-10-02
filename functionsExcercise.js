// Calculating Total Number Of Items
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));



// Sum Of Arguments
function sum(...args) {
    if(args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]];

    return args.reduce((a, b) => a + b);

}

console.log(sum([1, 2, 3, 4]));



// Implementing This Keyword References Using Self/That Method
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags(){
      const self = this;
      this.tags.forEach(function (tag) {
          console.log(self.title, tag);
      });
  }
};

video.showTags();



// Implementing This Keyword References Using Bind Method
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({name: 'Mosh'}, 1, 2);
playVideo.apply({name: 'Mosh'}, [1, 2]);
playVideo.bind({name: 'Mosh'})();

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video.showTags();



// Implementing This Keyword References Using Arrow functions
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();


const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    },
    get getRadius(){
        return circle.radius;
    },
    set changeRadius(value){
        this.radius = value;
    }
};

console.log(circle.radius);
console.log(circle.area);

circle.radius = 2;
console.log(circle.radius);
console.log(circle.area);


