const caesar = function(phrase, shift) {
    function shiftChar(c, num) {
        // Should probably change punctuation check to be more inclusive
        // as numbers will be changed. I also need to think up a better
        // way to break down the check to make it more streamlined. This
        // just seems way too clunky at the moment.
        let punctuation = ['.',',','\"','\'','\\','!','?','-', ' ']
        if(punctuation.includes(c)) {
            return c
        } else if( c >= 'A' && c <= 'Z') {
            let i = num
            let temp = c
            if(i > 0){
                while(i > 0){
                    temp = String.fromCharCode(temp.charCodeAt(0) + 1)
                    if(temp > 'Z'){
                        temp = 'A'
                    }
                    i--
                }
                return temp
            } else {
                while(i < 0){
                    temp = String.fromCharCode(temp.charCodeAt(0) - 1)
                    if(temp < 'A'){
                        temp = 'Z'
                    }
                    i++
                }
                return temp
            }

        } else {
            let i = num
            let temp = c
            if(i > 0){
                while(i > 0){
                    temp = String.fromCharCode(temp.charCodeAt(0) + 1)
                    if(temp > 'z'){
                        temp = 'a'
                    }

                    i--
                }
                return temp
            } else {
                while(i < 0){
                    temp = String.fromCharCode(temp.charCodeAt(0) - 1)
                    if(temp < 'a'){
                        temp = 'z'
                    }

                    i++
                }
                return temp
            }
        }
    }
    let charPhrase = phrase.split("")

    return charPhrase.reduce(((newPhrase, currentChar) => 
        newPhrase += shiftChar(currentChar, shift)), "")
}

module.exports = caesar
