function subset(nums) {
    let result = []
    let temp = []
    function recsub(nums , i) {
        if( i === nums.length){
            return result.push([...temp])
        }
        temp.push(nums[i])
        recsub(nums , i+1)
        temp.pop()
        recsub(nums , i+1)
    }
    recsub(nums , 0)
    return result
}

console.log(subset([1,2,3]));