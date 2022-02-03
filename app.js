const circle = {radius: 20, square: function() {
    return 3.14 * (this.radius ** 2);
}, perimeter: () => 2 * 3.14 * this.radius, toString: function() {
    return `radius of this circle is ${this.radius}`}};       // NaN у стрелки нет "this", не видит радиус
console.log(`square = ${circle.square()}, perimeter = ${circle.perimeter()}`);

console.log(`circle: ${circle}`);

const circle1 = {radius: 20, perimeter: function() {return 2 * 3.14 * this.radius}, toString: function() {
    return `radius of this circle is ${this.radius}`}};

// circle1.square();  error, there is no method square for circle1

function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.square = function() {
   return 3.14 * (this.radius ** 2);
}
Circle.prototype.perimeter = function() {
    return 2 * 3.14 * this.radius;
}
Circle.prototype.toString = function() {
    return `radius of this circle is ${this.radius}`
}
const circle10 = new Circle(10);

console.log(`circle10: ${circle10}`);



Array.prototype.filter = function(callbackPredicate) {
    const res = [];
    this.forEach((n, i, a) => !callbackPredicate(n, i, a) && res.push(n));
    return res;
}

const ar = [1,2,3,4,100];
ar.filter(n => n % 2 === 0).forEach(n =>  console.log(n));