let data = [2,14,4,56,19,22,9];
let element = 22;
let index = undefined;

for(let i=0; i<data.length-1; i++){
    if(data[i] === element){
        index=i;
        break;
    }
}
console.log(index);