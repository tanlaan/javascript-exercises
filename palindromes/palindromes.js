const palindromes = palindrome => {
    let prettyPalindrome = palindrome.replace(/[.,!?\\-]/g, "")
    prettyPalindrome = prettyPalindrome.replace(/\s/g, "")
    prettyPalindrome = prettyPalindrome.toLowerCase()
    console.log(prettyPalindrome)
    function palindromeCheck(word){
        if(word.length <= 1){
            return true
        } else {
            return word.endsWith(word.charAt(0)) && palindromeCheck(word.slice(1, word.length - 1))
        }
    }
    return palindromeCheck(prettyPalindrome)

}

module.exports = palindromes
