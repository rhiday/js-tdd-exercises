const pallindromes = (str) => {
    
    const original = str.replace(/[^\w\s]|_/g,'').replace(/\s+/g, '').toLowerCase();
  
    const reverse = original.split('').reverse().join('').toLowerCase();
  
    if(original == reverse) return true;
  
    else return false;
}

pallindromes('racecar');

module.exports = pallindromes;

/* manually reversing string

const original = str.split('');
let newArr = [];
  
for(let i = original.length - 1; i >= 0; i--) {
    newArr += original[i];
}

*/