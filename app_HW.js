
// #1 - sort array

const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort(function(a, b) {
   if (a%2 == 0 && b%2 == 0) {
      return a-b; 
   } 

   if (a%2==0 && b%2==1) {
      return -1;
   }

   if (a%2==1 && b%2==1) {
      return b-a;
   }

   if (a%2==1 && b%2==0) {
      return 1;
   }
});
    console.log(arHw);



 // #2 - matrixTransp

const matrix1 = [[1,2], [3,4], [5,6]];

function matrixTransp(matrix) {
   const res = [];

   for (let i = 0; i<matrix[0].length; i++){
      res.push([]);
      for (let j = 0; j<matrix.length; j++){
         res[i].push(matrix[j][i]);
      }
      console.log(res[i]);
   }
   return;
}
matrixTransp(matrix1);

