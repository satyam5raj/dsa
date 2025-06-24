// Find maximum/minimum in an array

function maxNum(arr){
    let max = arr[0];
    for(let num of arr){
        if(num>max){
            max = num;
        }
    }
    return max;
}

function minNum(arr){
    let min = arr[0];
    for(let num of arr){
        if(num<min){
            min = num;
        }
    }
    return min;
}

let arr = [11, 73, 43, 937, 43, 5, 1, 25]
console.log(maxNum(arr))
console.log(minNum(arr))