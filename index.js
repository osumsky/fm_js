/* logic */
function MyArrayProto() {
  this.push = function () {
    for (let i=0; i<arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;
  };
}
/* data */
function MyArray() {
  this.length = 0;
  for (let i=0; i<arguments.length; i++) {
    this.push(arguments[i]);
  }
}
/* Prototype*/
MyArray.prototype = new MyArrayProto();
MyArray.prototype.newMethod = function(){};

const myArray = new MyArray(1,1,1,15,5);
myArray.push(2,2,2);
