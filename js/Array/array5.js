// Move all zeros to the end

function moveZerosToEnd(arr){
    let result = [];
    let zeroCount = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i])
        } else{
            zeroCount++
        }
    }

    while(zeroCount--) result.push(0);
    return result;
}

let arr = [1, 0, 2, 8, 0, 0, 7, 9];
console.log(moveZerosToEnd(arr))