// console.log("hello world");

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// }

console.log('a'+ `${"a"-"a"}` + 'as');


function calculator(x,y,z) {
    let res = 0;
    switch (z) {
        case '+':
            res = x + y;
            break;
        case '-':
            res = x - y;
            break; 
        case '*':
            res = x * y;
            break;
        case '/':
            if (y === 0) { 
                console.log('ERROR : not correct value')
                break;
            }
            res = x / y;
            break;  
            
        default:
            return console.log('Enter correct numbers');    
    }
    console.log(res);
    return;
}

calculator(6,3,'/');

function fun(x) {
    return function(y,z) {
        return (x+y)/z;
    }
}
let res1 = fun(5)(10,3)
console.log(res1);