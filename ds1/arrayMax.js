// let max = ( arr ) => {
//     if( arr.length === 1 ) return arr[0]
//     if( arr.length === 2 ) return arr[0] > arr[1] ? arr[0] : arr[1]
//     const maxArr = max(arr.slice(1))
//     return arr[0] > maxArr ? arr[0] : maxArr
// }

let max = ( arr ) => {
    if ( arr.length === 1 ) return arr[0]
    else if ( arr.length === 2 ) return arr[0] > arr[1] ? arr[0] : arr[1]
    let maxArr = max(arr.slice(1))
    return maxArr > arr[0] ? maxArr : arr[0]
}

console.log(max([5,5,5,8,6,100,7,4,7,10]));