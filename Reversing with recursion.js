let data = [2,14,4,56,19,22,9];
let temp;

function reverseArray (data,start,end) {
    if(start<=end) {
        temp = data[start]
        data[start] = data[end]
        data[end] = temp
        reverseArray(data, start+1, end-1 )
    }
}

console.log(reverseArray(data,0,data.length-1))