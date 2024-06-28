function maxSubArray1(nums){
    let maxSum = nums[0]
    let startIndex = 0
    let endIndex = 0
    for(let i =0 ; i < nums.length ; i++){
        let currentSum = 0
        for(j = i ; j < nums.length ; j++){
            currentSum = currentSum + nums[j]
            if( currentSum > maxSum){
                maxSum = currentSum
                startIndex = i
                endIndex = j
            }
        }
    }
    return {
        sum : maxSum ,
        subArray : nums.slice(startIndex , endIndex + 1)
    }
}

console.log(maxSubArray1([-2 , 1 , -3 , 4 , -1 , 2 , 1 , -5 , 4]));


//maximum sum subarray
function maxSubArray(nums){
    let sum = 0
    let max = nums[0]
    for ( let i = 0 ; i < nums.length ; i++){
        sum += nums[i]
        if( sum > max) {
            max = sum
        }
        if ( sum < 0 ){
            sum = 0
        }
    }
    return max
}

console.log(maxSubArray([-2 , 1 , -3 , 4 , -1 , 2 , 1 , -5 , 4]));

