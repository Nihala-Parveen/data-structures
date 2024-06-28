function countOccurence ( str ) {
    let occurence = {}
    for ( let char of str) {
        if ( !occurence[char]) occurence[char] = 0
        occurence[char]++
    }
    return occurence
}

console.log(countOccurence('aaabbbgghfffjk'));