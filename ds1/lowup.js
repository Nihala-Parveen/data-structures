function lowup ( str ) {
    let letter = str.split('')
    for ( let i = 0 ; i < letter.length ; i++ ) {
        let code = letter[i].charCodeAt(0)
        if ( code > 64 && code < 91 ) {
            letter[i] = String.fromCharCode(code + 32)
        } else {
            letter[i] = String.fromCharCode(code - 32)
        }
    }
    return letter.join('')
}
console.log(lowup("hQjWlEpO"));