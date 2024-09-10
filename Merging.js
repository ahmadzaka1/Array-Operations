let data1 = [2,14,4,56,19,22,9]
let data2 = [2,24,94,6,10,21]
let data3 = []

for(i=0; i<data1.length; i++) {
    data3[i] = data1[i]
}
for(i=0; i<data2.length; i++) {
    data3[data1.length + i] = data2[i]
}

console.log(data3)