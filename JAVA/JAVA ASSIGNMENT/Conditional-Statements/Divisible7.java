//1. Write a Java Program to check if a number is divisible by 7 or not?

public class Divisible7{
    public static void main(String args[]){
        int num = 70;
        if(num % 7 == 0){
            System.out.println(num + " is divisible by 7");
        }
        else{
            System.out.println(num + " is Not divisible by 7");
        }
    }
}