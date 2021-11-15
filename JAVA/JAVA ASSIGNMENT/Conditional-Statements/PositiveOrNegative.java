// 3. Write a program to check if a number is positive or not?

public class PositiveOrNegative{
    public static void main(String[] args){
        int num = 0;

        if(num > 0){
            System.out.println(num + " is Positive Number");
        }
        else if(num < 0){
            System.out.println(num + " is Not Positive Number");
        }
        else{
            System.out.println(num + " is Zero");
        }
    }
}