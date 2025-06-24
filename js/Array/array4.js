// Sort an array or Is the array is sorted

function isSorted(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[i-1]) return false;
    }
    return true
}

let arr = [11, 73, 83, 937, 43, 5, 1, 25]
console.log(isSorted(arr))

console.log(arr.sort((a, b) => a-b))   // .sort() method sorts an array

function sortArray(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray(arr))