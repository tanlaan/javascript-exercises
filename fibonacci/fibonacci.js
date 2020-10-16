const fibonacci = function(number) {
    if(number < 1){
        return 'OOPS'
    } else if(number == 1) {
        return 1
    } else if(number == 2){
        return 1
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2)
    }
}

module.exports = fibonacci
