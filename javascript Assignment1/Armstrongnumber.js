// 16. Write a program to check a given number is Armstrong number or not
let sum=0;
const number=153;

// create a temporary variable
let temp=number;

while(temp>0) {
    // finding the ones digit
    let remaider=temp%10;

    sum+=remaider*remaider*remaider;
    
    //removing last digit from the number
    temp=parseInt(temp/10); //convert float into integer

}

//check the condition
if(sum==number){
    console.log(number,'is an Armstrong number');
}

else{
    console.log(number,'is not an Armstrong number');
}
