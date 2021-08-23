var number=[3,2,1,20,4,67];
console.log(number);

console.log("Ascending order: ",number.sort((a,b)=>a-b)); //Sorts an array in place. This method mutates the array and returns a reference to the same array.

console.log("Descending order :",number.sort((a,b)=>b-a));