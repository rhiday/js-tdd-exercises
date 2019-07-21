const sumAll = function (start, end) {
    
    if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR';

    else if (start < 0 || end < 0) return 'ERROR';

    else if (start > end) {
        const temp = start;
        start= end;
        end = temp;
    }

    let sum = 0;

    while(start <= end) {
        sum += start;
        start++;
    }
    
    return sum;
    
}

sumAll(1, 4);

module.exports = sumAll