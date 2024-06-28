// function Bsearch ( arr , val ) {
//     let leftIndex = 0 
//     let rightIndex = arr.length - 1
//     while ( leftIndex <= rightIndex ) {
//         let middleIndex = Math.floor( ( leftIndex + rightIndex ) / 2 )
//         if ( val === arr[middleIndex]) {
//             return middleIndex
//         }
//         if ( val < arr[middleIndex ]) {
//             rightIndex = middleIndex -1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

function Bsearch ( arr , val ) {
    let left = 0
    let right = arr.length - 1
    while ( left <= right ) {
        let middle = Math.floor((left + right) / 2)
        if ( val < arr[middle]) right = middle - 1
        else if ( val > arr[middle]) left = middle + 1
        else return middle
    }
    return -1
}


console.log( Bsearch ( [ - 5 , 2 , 4 , 6 , 10 ] , 10) );
console.log( Bsearch ( [ - 5 , 2 , 4 , 6 , 10 ] , 6) );
console.log( Bsearch ( [ - 5 , 2 , 4 , 6 , 10 ] , 20) );

//Big-O = O(log n)