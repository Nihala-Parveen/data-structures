function str(s){
    if(s === s.split('').reverse().join('')){
        return true
    } else {
        return false
    }

}
console.log(str("malayxalam"));