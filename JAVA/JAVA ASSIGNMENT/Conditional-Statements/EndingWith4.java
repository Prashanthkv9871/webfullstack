// 4. Write a Java Program to check if a number is having 4 at the unit's place or not?

public class EndingWith4{
    public static void main(String[] args){
        int a = 4444;
        if(a%10 == 4){
            System.out.println(a+ " the number is ending with 4");
        }
        else{
            System.out.println(a +" the number is not ending with 4");
        }

    }
}