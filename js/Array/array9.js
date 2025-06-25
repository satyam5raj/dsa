// Count the Frequency of Each Element 

function countFrequency(arr){
    const freq = {}
    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

let arr = [1, 2, 1, 3, 2, 5, 7, 5, 1, 9]
console.log(countFrequency(arr));

// Most Frequent Element

function mostFrequest(arr){
    let freq = {};
    let maxCount = 0;
    let maxItem = null;

    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1;
        if(freq[num] > maxCount){
            maxCount = freq[num];
            maxItem = num
        }
    }

    return Number(maxItem);
}

console.log(mostFrequest(arr))