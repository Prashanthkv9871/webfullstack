// 9. Write a Java Program to print the greatest number in given three numbers?

public class Num3Greatest{
    public static void main(String[] args){
        int a = 20;
        int b = 45;
        int c = 50;

        if(a > b && a > c){
            System.out.println(a + " is greatest Number");
        }
        else if(b > a && b > c){
            System.out.println(b +" is greatest Number");
        }
        else{
            System.out.println(c + " is greatest Number");
        }
    }
}