let n=[20,1,30,5,70,40];
let small=n[0];

for(i=0;i<n.length;i++){
    if(small>n[i]){
        small=n[i];
    }
}

console.log(small);