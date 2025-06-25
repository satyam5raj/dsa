// Given an array of integers (positive and negative), find the maximum sum of any contiguous subarray. 
// Maximum Subarray Sum (Kadane’s Algorithm)

function maxSumSubarray(arr){
    let maxSum = -Infinity;

    for(let i=0; i<arr.length; i++){
        let sum = 0;
        for(let j=i; j<arr.length; j++){
            sum = sum + arr[j]
            if(sum>maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

function maxSubarraySum(arr){
    let maxSum = arr[0];
    let currentSum = arr[0];
    for(let i=1; i<arr.length; i++){
        let num = arr[i]
        currentSum = Math.max(num, currentSum+num)
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
}

let arr = [-2,1,-3,4,-1,2,1,-5,4]
// let arr = [1, 2, -1, 4, 3]
console.log(maxSumSubarray(arr))
console.log(maxSubarraySum(arr))