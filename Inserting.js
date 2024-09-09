let data = [2,14,4,56,19,22,9]
let newElemet = 30
let position = 2
console.log(`Before inserting: ${data}`)
for(let i=data.length-1; i>=0; i--) {
    if(i >= position){
        data[i+1] = data[i]
        if(i==position){
            data[i] = newElemet
        }
    }
}
console.log(`After inserting: ${data}`)