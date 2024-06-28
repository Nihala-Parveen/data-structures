// function power ( base , exponent ) {
//     if ( exponent === 0 ) return 1
//     return base * power ( base , exponent - 1 )
// }

function power ( base , exponent ) {
    if ( exponent === 0 ) return 1
    return base * power ( base , exponent - 1 )
}

console.log(power( 2 , 4));

// function pow ( base , exponent ) {
//     let result = 1
//     for ( let i = 0 ; i < exponent ; i++ ) {
//         result *= base
//     }
//     return result
// }

function pow ( base , exponent ) {
    let result = 1
    for ( let i = 1 ; i <= exponent ; i++ ) result *= base
    return result
}

console.log(pow(2,4));