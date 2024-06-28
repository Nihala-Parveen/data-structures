console.log("Print no.s from 1 to N");
function up ( n ) {
    if ( n === 0 ) return
    up( n - 1 )
    console.log(n);
}

up(5)

console.log("Print No.s from N to 1");
function down ( n ) {
    if ( n > 0 ) {
        console.log(n);
        down( n - 1 )
    }
}
down(5)