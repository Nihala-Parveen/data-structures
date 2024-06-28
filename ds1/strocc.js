function firstOcc ( str , char ) {
    for ( let i = 0 ; i < str.length ; i++ ) {
        if ( str[i] === char ) return i
    }
    return -1
}
console.log(firstOcc("nihala" , "a"));

function lastOcc ( str , char ) {
    for ( let i = str.length -1 ; i >= 0 ; i-- ) {
        if ( str[i] === char ) return i
    }
    return -1
}

console.log(lastOcc("nihala" , "a"));