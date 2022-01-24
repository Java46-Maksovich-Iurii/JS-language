// const ar = [-10, 50, -12, 80, 40];
// let str = '';

// ar.forEach(function(element, index){
//    if (index != ar.length-1) {
//       str += element + "#";
//    } else str += element;
// })
// console.log(str);

// str = str.substring(0, str.length-1);
// console.log(str);

// const lastSharpIndex = str.lastIndexOf('#');

// const str1 = str.substring(0, lastSharpIndex);
// console.log(str1);

// const str2 = str.substring(lastSharpIndex+1);
// console.log(str2);

// str = str1 +str2;

// const ar1 = ar.slice(1);
// str += ar[0];
// ar1.forEach(n => str += '#' + n);

// ar.forEach(function(element, index){
//    console.log (element +' is ' + (index+1) + ' from ' + ar.length + " elements");
// })

// const ar2 = ar.map(element => element*2);
// console.log(ar2);

// const ar3 = ar.map(element => `<li>${element}</li>`);
// console.log(ar3);


const ar20 = [13,17,20,55,23,2,40];
const arEvenOdd = ar20.filter((n, i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
// console.log(arEvenOdd);

const test = ar20.reduce((res, cur) => res + cur, 0);
// console.log(test);

const max = ar20.reduce((max, cur) => cur > max ? cur : max, ar20[0]);
console.log(max);