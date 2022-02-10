const point = {
    x: 3,
    y: 4
};
function displayPointInSpace(z, t) {
    console.log(`x: ${this.x}, y: ${this.y}, z: ${z}, time: ${t}`);
}

Function.prototype.mybind = function (thisObj, ...args) {

    return (...params) => {
        thisObj.method123456 = this;
        const res = thisObj.method123456(...args.concat(params));
        delete thisObj.method123456;
        return res;
    } 
}
// displayPointInSpace.call(point, 10,20);
// displayPointInSpace.mybind(point, 10, 20)();

const funDisplay = displayPointInSpace.mybind(point);
funDisplay(10,20);

const funDisplayArguments = displayPointInSpace.mybind(point, 10, 20);
funDisplayArguments();

const funDisplayMixed = displayPointInSpace.mybind(point, 10);
funDisplayMixed(20);