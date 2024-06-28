//  function bubbleSort ( arr ) {
//     let swapped
//     do {
//         swapped = false
//         for ( let i = 0 ; i < arr.length - 1 ; i++ ) {
//             if ( arr[i] > arr[i+1] ) {
//                 [ arr[i] , arr[i+1] ] = [ arr[i + 1] , arr[i] ]
//                 swapped = true
//             }
//         }
//     } while ( swapped )
// }

// bubbleSort(arr)
// console.log(arr);

function forSort ( arr ) {
    for ( let i = 0 ; i < arr.length ; i++ ) {
        for ( j = 0 ; j < arr.length -i - 1 ; j++ ) {
            if ( arr[j] > arr [j+1] ) [ arr[j] , arr[j+1] ] = [ arr[j+1] , arr[j] ]
        }
    }
    return arr
}

arr = [ 8 , 20 , -2 , 4 , -6 ]
console.log(forSort(arr));