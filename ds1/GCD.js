function GCD ( num1 , num2 ) {
    if ( num1 === 0 ) return num2
    return GCD ( num2 % num1 , num1 )
}

console.log(GCD(36,60));
console.log(GCD(60,36));
console.log(GCD(10,15));
console.log(GCD(15,10));