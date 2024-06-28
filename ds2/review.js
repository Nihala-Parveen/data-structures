// function removeDuplicates ( str ) {
//     let s = str.split('')
//     let stack = []
//     for ( let i = 0 ; i< s.length ; i++ ) {
//         if ( s[i] === stack[stack.length - 1]) stack.pop()
//         else stack.push(s[i])
//     }
//     return stack.join("")
// }

function removeDuplicates ( str ) {
    let count = {}
    let stack = []
    let seen = new Set();

    for ( let i = 0 ; i < str.length ; i++ ) {
        if ( !count[str[i]]) count[str[i]] = 0
        count[str[i]]++
    }
    for ( let i = 0 ; i < str.length ; i++ ) {
        count[str[i]]--
        if (seen.has(str[i])) continue;
        if ( count[str[i]] === 0 ) {
            stack.push(str[i])
            seen.add(str[i]);
        }
    }
    return stack.join("")
}

console.log(removeDuplicates("ghtttdrettaagpqr"));