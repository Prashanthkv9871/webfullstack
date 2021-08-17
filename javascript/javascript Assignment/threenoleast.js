//10. Write a program to print the least number in given three numbers?

let a = 5, b = 3, c = 10;
    if (a <= b && a <= c){
        console.log( a + " is the smallest");
    }
    else if (b <= a && b <= c){
        console.log( b + " is the smallest");
    }
    else{
        console.log( c + " is the smallest");
    }