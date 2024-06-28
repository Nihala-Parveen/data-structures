function countVowel ( str ) {
    let vowel = [ 'a' , 'e' , 'i' , 'o' ,'u']
    let count = 0
    for ( let letter of str.toLowerCase()) {
        if( vowel.includes(letter)) {
            count++
        }
    }
    return count
}

console.log(countVowel("Nihala"));
console.log(countVowel("cdfghb"));
console.log(countVowel("AlAiOjkl"));

function recCount ( str , count = 0 , i = 0 ) {
    if( !str[i] ) return count
    if('aeiou'.includes(str[i].toLowerCase())) count++
    return recCount ( str , count , i+1 )
}

console.log(recCount("Nihala"));
console.log(recCount("cdfghb"));
console.log(recCount("AlAiOjkl"));