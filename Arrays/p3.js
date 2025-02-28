//Missing Number
//hints: (n*(n+1))/2 and reduce helper
//O(N)   
let nums=[3,0,1]
function missingNumber(arr){
    let n=arr.length
    let expectedSum=(n*(n+1))/2
    let actualSum=nums.reduce((acc,num)=>acc+num,0)
    return expectedSum-actualSum
}
console.log(missingNumber(nums));