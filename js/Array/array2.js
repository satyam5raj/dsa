// Reverse an array

let array = [1, 2, 3, 4, 5]
function reverseArray(array){
    let left = 0;
    let right = array.length - 1;
    while(left < right){
        [array[left], array[right]] = [array[right], array[left]]
        left++;
        right--;
    }
    return array
}

function reverse(array){
    let arr = [];
    for(let i = array.length - 1; i >= 0; i--){
        arr.push(array[i])
    }
    return arr;
}

console.log(reverseArray(array));
console.log(reverse(array));