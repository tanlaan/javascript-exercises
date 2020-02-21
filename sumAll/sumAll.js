const sumAll = function(start, finish) {
    let total = 0;
    let first, last;
    if (start < 0 || finish < 0 || typeof(start) !== 'number' || typeof(finish) !== 'number' ){
        return 'ERROR';
    } else if (start < finish){
        first = start;
        last = finish;
    } else {
        first = finish;
        last = start;
    }
    for (let i=first;i <= last; i++){
        total += i;
    }
    return total;
}

module.exports = sumAll
