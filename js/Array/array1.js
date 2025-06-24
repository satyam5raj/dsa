class Array {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) { 
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if(this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        this.data[this.length - 1] = undefined;
        this.length--;
        return lastItem;
    }

    unshift(item) {
        for(let i = this.length; i>0; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }

    shift() {
        if(this.length === 0) return undefined;
        const firstItem = this.data[0];
        for(let i=0; i<this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        this.data[this.length-1] = undefined;
        this.length--;
        return firstItem;
    }

    print() {
        let output = [];
        for(let i=0; i<this.length; i++){
            output.push(this.data[i])
        }
        return output;
    }

    slice(start = 0, end = this.length) {
        const result = [];
        if(start<0) start = this.length + start;
        if(end<0) end = this.length + end;
        for(let i=start; i<end && i<this.length; i++){
            result.push(this.data[i])
        }
        return result;
    }

    splice(start, deleteCount, ...items) {
        const deletedItems = [];
        const rest = {};

        for (let i = start + deleteCount; i < this.length; i++) {
            rest[i - start - deleteCount] = this.data[i];
        }

        for (let i = 0; i < deleteCount; i++) {
            deletedItems.push(this.data[start + i]);
        }

        let index = start;
        for (let item of items) {
            this.data[index++] = item;
        }

        for (let key in rest) {
            this.data[index++] = rest[key];
        }

        this.length = index;
        return deletedItems;
        }
    }

const arr = new Array()
arr.push("Apple");
arr.push("Banana");
arr.push("Kiwi");
arr.push("Watermelon");
arr.push("Muskmelon");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("Papaya");
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.print());
console.log(arr.slice(1,3));
arr.splice(1, 2, 'X', 'Y');
console.log(arr.print());
arr.splice(1, 2);
console.log(arr.print());