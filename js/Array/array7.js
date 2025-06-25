// Rotate array by 1 or K positions

// 1. Rotate by 1 

function rotateByOne(arr){
    let last = arr[arr.length-1];
    for(let i=arr.length-1; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = last;
    return arr;
}

// 2. Rotate by K positions

function rotateByK(arr, k){
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, arr.length-k)]
}

function leftRotateByK(arr, k){
    k = k % arr.length;
    return [...arr.slice(k), ...arr.slice(0, k)]
}

let arr = [1, 5, 3, 6, 8, 9, 2]
console.log(rotateByK(arr, 2))
console.log(leftRotateByK(arr, 2))