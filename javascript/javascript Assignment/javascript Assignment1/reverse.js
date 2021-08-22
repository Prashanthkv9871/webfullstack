// 12. Write a program to print reverse of digits of numbers

let num=[2,3,4,1,9,5];
console.log('Before digits reverse',num);

num1=num.reverse();

console.log('After digits reverse',num1);


//while loop
var number=73682;
var rev=0;
console.log("before reverse:",number)
while(number!=0){
	rev=(rev*10) +(number%10);
	number=parseInt(number/10);
	
}

console.log("after reverse:",rev)