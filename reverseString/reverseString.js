const reverseString = function (str) {

  let splitStr = str.split("");
  let newStr = [];

  for (let i = splitStr.length - 1; i >= 0; i--) {
    newStr += splitStr[i];
  }

  return newStr;
}

reverseString('Hello World');


module.exports = reverseString;