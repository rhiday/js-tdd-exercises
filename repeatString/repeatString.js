const repeatString = function (str, count) {

  let newStr = '';

  if (count < 0)  return 'ERROR';

  else {
    for (let i=0; i < count; i++) {
      newStr += str;
    }
    return newStr;
  }
  
}

repeatString('hey', 3);


module.exports = repeatString;