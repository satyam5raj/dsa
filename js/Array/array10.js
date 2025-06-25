// Merge two sorted array

function mergeSortedArrays(arr1, arr2){
    let result = [];
    let i = 0, j = 0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length) result.push(arr1[i++]);
    while(j<arr2.length) result.push(arr2[j++]);

    return result;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

console.log(mergeSortedArrays(arr1, arr2))



// Merge and sort two unsorted arrays

function mergeAndSort(arr1, arr2){
    return [...arr1, ...arr2].sort((a, b) => a-b)
}

let array1 = [5, 1, 9];
let array2 = [6, 8, 2];
console.log(mergeAndSort(array1, array2))