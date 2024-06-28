function vowelCount ( str ) {
    let count = {}
    str = str.toLowerCase()
    let vowel = ['a','e','i','o','u']
    for ( let char of str ) {
        if ( vowel.includes(char) ) {
            if ( !count[char] ) count[char] = 0
            count[char]++
        }
    }
    return count
}

console.log(vowelCount("Implementation"));
console.log(vowelCount("hEelloaa"));