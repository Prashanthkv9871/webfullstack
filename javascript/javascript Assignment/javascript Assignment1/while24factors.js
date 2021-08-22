/* 10. Write a program Factors of 24 using while loop
11. (Factors of 24 are 1,,3,4,6, 12, 24)
*/

//program to find the factors of an integer

// take input
console.log();
let num =24;


for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}

// while loop
console.log('while loop');
let i=1;
while(i<=num){
    if(num%i==0){
        console.log(i); 
    }
    i++;
}
