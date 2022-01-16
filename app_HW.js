
function encode(num, Codingstring) {
    let res = "";

    if (Codingstring.length <= 1 ) {
        console.log("Codingstring value is not correct.")
        return;
    }
    if(charDoubleCheck(Codingstring) == true) {
        console.log("Coding string has double digits.");
        return;
    } else {
        do {
            const digit = Math.trunc(num % (Codingstring.length));
            const symb = getSymbol(digit, Codingstring);
            res = symb + res;
            num = Math.trunc(num / (Codingstring.length)); 
        } while (num >= 1);
        return res;
    }
}

function getSymbol(digit, Codingstring) {
    return "" + Codingstring[digit];
}


function charDoubleCheck(str)
{
for(i=0; i < str.length; i++)
  {
   if (str.split(str[i]).length-1 > 1) 
    {
        return true;
    }  
  }
  return false;
} 


console.log(encode(5, ".-"));