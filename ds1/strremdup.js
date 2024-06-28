// function removeDuplicates ( str ) {
//     let string = ""
//     for ( let i = 0 ; i < str.length ; i++ ) {
//         if ( str[i] === str[i+1] ) continue
//         else string += str[i]
//     }
//     return string
// }
// console.log(removeDuplicates("aaddffggbn"));

function removeDuplicates ( str , index = 0 ) {
    if ( index >= str.length-1 ) return str[index]
    if ( str[index] === str[index+1]) return removeDuplicates ( str , index+1)
    else return str[index] + removeDuplicates(str , index+1)
}

console.log(removeDuplicates("aaddffggbn"));
