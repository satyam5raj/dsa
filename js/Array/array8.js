// Remove Duplicates from Sorted Array

function removeDuplicates(arr){
    let mySet = new Set()
    for(let i=0; i<arr.length; i++){
        if(!mySet.has(arr[i])){
            mySet.add(arr[i])
        }
    }
    return [...mySet]
}

let arr = [1, 2, 1, 3, 2, 5, 7, 5, 9]
console.log(removeDuplicates(arr));


// Remove all occurrences of an element

function removeOccurences(arr, element){
    return arr.filter(num => num !== element)
}

console.log(removeOccurences(arr, 2))