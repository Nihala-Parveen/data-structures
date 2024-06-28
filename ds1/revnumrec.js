function revNum ( n , reversed = 0 ) {
    if ( n === 0 ) return reversed
    return revNum ( Math.floor(n/10) , reversed * 10 + n % 10 )
}

console.log(revNum(123456789));
console.log(revNum(987654321));
console.log(revNum(937));