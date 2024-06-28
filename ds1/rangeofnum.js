function num ( start , end) {
    if ( end < start ) return []
    const numbers = num( start , end -1)
    numbers.push(end)
    return numbers
}
console.log(num(0,5));

function rn (start , end ) {
    const res = [] 
    for( let i = start ; i <= end ; i++) {
        res.push(i)
    }
    return res
}

console.log(rn(1,5));