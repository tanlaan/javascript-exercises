const caesar = function(phrase, shift) {
    function shiftChar(c, num) {
        // This didn't actually take too long to refactor. I feel 
        // like this is a much more readable version of my last code.
        // Before it was just manually doing the same thing for the
        // four different option we have. I like it much better.
        let punctuation = ['.',',','\"','\'','\\','!','?','-', ' ']
        let increment = 0

        if(punctuation.includes(c)) {
            return c
        }

        if( num == 0 ) {
          return c
        } else if( num > 0 ) {
          increment = -1
        } else {
          increment = 1
        }
        
        let lowerBound = 'a'
        let upperBound = 'z'
        
        if( c >= 'A' && c <= 'Z' ) {
            upperBound = upperBound.toUpperCase()
            lowerBound = lowerBound.toUpperCase()
        }
        
        for( let counter = num; counter != 0; counter += increment ){
            c = String.fromCharCode( c.charCodeAt(0) + (-increment) )
            if( c > upperBound || c < lowerBound ) {
                if( c > upperBound ) {
                    c = lowerBound
                } else {
                    c = upperBound
                }
            }
        }
        return c
    }

    let charPhrase = phrase.split("")

    return charPhrase.reduce(((newPhrase, currentChar) => 
        newPhrase += shiftChar(currentChar, shift)), "")
}

module.exports = caesar
