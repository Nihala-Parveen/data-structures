//reverse words in a string
const revStr = function(str) {
    let s = str.split("")
    let stack = []
    for ( let char of s ) stack.push(char)
    let finalStr = ""
    while ( stack.length ) {
        let curr = stack.pop()
        finalStr += curr
    }
    return finalStr
}

//time complexity :  O(2n) = O(n)
//space complexity : O(n)

console.log(revStr("a good example"));
console.log(revStr("hello world"));
console.log(revStr("hello"));

