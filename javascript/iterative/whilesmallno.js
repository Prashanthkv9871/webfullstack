let n=[20,30,10,3,40];
let small=n[0];

let i=0;
while(i<n.length){
    if(small>n[i]){
        small=n[i];
       
    }
    i++;
}

console.log(small);