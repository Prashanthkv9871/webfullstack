/*
14. Write a program to print the Fibonacci number series up to a given number
15. Expected out 17 - 011235813
*/
let i=0, j=1,k;

while(i<=17){
   console.log(i); 
   k=i+j;
   i=j;
   j=k;
}