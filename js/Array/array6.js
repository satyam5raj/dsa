// Find second largest number

function secondLargest(arr){
    let first = -Infinity;
    let second = -Infinity;
    for(let num of arr){
        if(num > first){
            second = first;
            first = num;
        }else if (num > second && num !== first){
            second = num;
        }
    }
    return second;
}

function secLargest(arr){
    const unique = [...new Set(arr)]
    console.log(unique);
    const response = unique.sort((a,b) => b-a);
    console.log(response)
    return response[1];
}

function thirdLargest(arr){
    const unique = [...new Set(arr)]
    console.log(unique);
    const response = unique.sort((a,b) => b-a);
    console.log(response)
    return response[2];
}

let arr = [1, 3, 9, 2, 7, 8, 5, 4]
console.log(secLargest(arr))
console.log(thirdLargest(arr))