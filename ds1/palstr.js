function palstr ( str ) {
    for ( let i = 0 ; i < str.length / 2 ; i++ ) {
        if ( str[i] !== str[str.length -1 -i]) {
            return false
        }
    }
    return true
}

console.log(palstr("hello"));
console.log(palstr("malayalam"));

function recpal ( str ) {
    if ( str.length === 1 ) return true
    if ( str.length === 2 ) return str[0] === str[1]
    if ( str[0] === str.slice(-1) ) return recpal(str.slice(1,-1))
    return false
}

console.log(recpal("hello"));
console.log(recpal("malayalam"));