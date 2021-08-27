let n=[20,10,45,30]
let small=n[0];

let i=0;
do{
    if(small>n[i]){
        small=n[i];
    }
    i++;
}while(i<n.length);

console.log(small);