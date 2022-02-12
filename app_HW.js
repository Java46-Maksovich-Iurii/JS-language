/* TASK 1 */

function getRandomNumber(min, max) {
    min > max ? [min, max] = [max, min] : [min, max];
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(100, 200));
console.log(getRandomNumber(1000, 100));


/* TASK 2 */

function concatinate(prefix) {
    return function (postfix) {
        return prefix + postfix;
    }
}

const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);