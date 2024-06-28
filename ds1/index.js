const arr = [ 1 , 2 , 3 , "Nihala" ]
arr.push(4) //add at last
arr.unshift(0) //add at first
arr.pop() //remove from last
arr.shift() //remove from first
arr.splice( 2 , 0 , "hai" ) //The splice() method adds and/or removes array elements.

for( const item of arr ) {
    console.log(item);
}

const a = arr.slice(1,3) //The slice() method returns selected elements in an array, as a new array.
console.log(a);

//two methods by which we can recognize a JavaScript array
console.log(Array.isArray(arr));        
console.log(arr instanceof Array);