function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

let kim = new Person('kim', 10, 20, 30);

let lee = new Person('lee', 10, 10, 10);

// console.log('kim.sum(kim.first, kim.second)', kim.sum(kim.first, kim.second));
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());

let d1 = new Date('2019-4-10');
console.log('d1.getFullYear()', d1.getFullYear());

console.log('Date', Date);

console.log('Person()', Person());
console.log('new Person()', new Person());
