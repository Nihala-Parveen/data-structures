//check to get target by adding two elements in array
const arr = [ 9 , 3 , 1 , 7 , 2 , 4 , 6 , 8 , 20 , 4 ]
const target = 10
for ( let i = 0 ; i < arr.length ; i++ ) {
    for ( j = i+1 ; j < arr.length ; j++ ){
        if ( arr[i] + arr[j] == target) {
            console.log( arr[i] , arr[j] );
        }
    }
}

