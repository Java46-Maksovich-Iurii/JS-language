
const arr = [10,20,30,40,50,60,70,80,90];
let str = '';

function myForEach(array, callback) {
   for (let i = 0; i<array.length; i++) {
      callback(array[i], i, array);
   }
}

myForEach(arr, n => str += '# ' + n );
console.log(str);

function myMap(array, callback) {
   const ar = [];
   for (let i = 0; i<array.length; i++) {
     ar[i] = callback(array[i], i, array);
   }
   return ar;
}

const arr1 = myMap(arr, n => n*=2);
console.log(arr1);

