function toUp ( str ) {
    const s = str[0]
    return s.toUpperCase() + str.slice(1)
}

console.log(toUp("nihala"));

function noFunc ( str ) {
    let s = str[str.length-1]
    let code = str.charCodeAt(str.length-1)
    if ( code > 96 && code < 123 ) s = String.fromCharCode( code - 32 )
    return str.slice(0 , str.length - 1 ) + s
}

console.log(noFunc("nihala"));