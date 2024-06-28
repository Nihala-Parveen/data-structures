// Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.
function replaceString ( str , n ) {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    for ( let i = 0 ; i < str.length ; i++ ){
        const index = letters.indexOf(str[i])
        const newIndex = ( index + n ) % 26
        result += letters[newIndex]
    }
    return result
}

console.log(replaceString ( "javascript" , 3 ));