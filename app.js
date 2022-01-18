// const ar = [2, 100, 9, 80];
// // ar.sort(function(a, b){
// //     return a - b;
// // });

// // ar.sort((a,b) => a-b);
// // console.log(`ar is ${ar.toString()}`);   // comparator

// ar[ar.length] = 200;
// console.log(ar);
// ar.push(300, 25);
// console.log(ar);

// const ar1 = [-8, 30, -57];
// // ar.push(ar1);
// ar.push(...ar1);    // spread operator / push - to the end
// console.log(ar);

// const ar2 = [27, 35];
// ar.unshift(...ar2); //unshift to the beginning
// console.log(ar);

// // splice - insert or replace
// //first arg - index for insert/replacing
// //second arg - amount of the deleted elements (if 0 only insert)
// //third arg - what we insert (elements)
// ar.splice(2, 0, 1, 2);
// console.log(ar);

// let el = ar.pop(); // delete and return last element
// el = ar.shift(); // delete and return first element
// ar.splice(3, 5);
// console.log(ar);

// const matrix1 = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];  //4 row / 3 column
// const matrix2 = [[100,20], [50,-5], [34,28]];
// const matrix3 = [[1,2], [3,4], [5,6]];
// function displayMatrix(matrix) {
//    for (let i = 0; i < matrix[i].length; i++) {
//        let row  = "";
//      for (let j = 0; j < matrix.length; j++){
//         row = row + matrix[j][i] + " ";
//      }
//      console.log(row);
//    }
//    return;
// }
// displayMatrix(matrix3);
// //displayMatrix(matrix2);



const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort(function(a, b) {
   if (a%2 == 0 && b%2 == 0) {
      if (a>b) {
         return 1;
      } else return -1;  
   } 
   if (a%2==0 && b%2==1) {
      return -1;
   }
   if (a%2==1 && b%2==1) {
      if (a<b) {
         return 1;
      } else return -1;
   }
});
    console.log(arHw);


