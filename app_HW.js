
// #1 - sort array

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

 // #2 - matrixTransp


const matrix1 = [[1,2], [3,4], [5,6]];
function displayMatrix(matrix) {
   for (let i = 0; i < matrix[i].length; i++) {
       let row  = "";
     for (let j = 0; j < matrix.length; j++){
        row = row + matrix[j][i] + " ";
     }
     console.log(row);
   }
   return;
}
displayMatrix(matrix1);
