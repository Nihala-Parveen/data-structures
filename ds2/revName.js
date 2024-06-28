function reverse(name) {
    let n = name.split('')
    let stack = []
    for( let char of n) {
        stack.push(char)
    }
    let str = ""
    while(stack.length) {
        let s = stack.pop()
        str+=s
    }
    return str
}
console.log(reverse("nihala"));