const repeatString = function(word, repeat) {
    let phrase = ''
    if (repeat < 0) phrase = 'ERROR';
    for (let i = 0; i < repeat; i++){
        phrase += word;
    }
    return phrase;
}

module.exports = repeatString
