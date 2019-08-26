const caesar = function(str, key) {
  
    let newStr = '';
    
    for(let i = 0; i < str.length; i++) {
      
      let char = str.charCodeAt(i);
      if(char >= 65 && char <= 90) {
        newStr += String.fromCharCode((char - 65 + key) % 26 + 65);
      }
      
      else if(char >= 97 && char <= 122) {
        newStr += String.fromCharCode((char - 97 + key) % 26 + 97);
      }

      else newStr += String.fromCharCode(char);
    }
    
    return newStr;
   
  }
  
module.exports = caesar;

/*Some inputs not working*/