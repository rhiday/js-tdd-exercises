const removeFromArray = function (arr, item) {
    /*
    const array = arr;

    return array.filter(function(item) {
        !arr.includes(item);
    });*/

    /* why not working
    
    const newArr = [];

    arr.forEach(item => {
        if (!arr.includes(item)) {
            newArr.push(item);
        }
    });

    return newArr;

    */

};
  
removeFromArray([1,2,3,4], 3);

module.exports = removeFromArray