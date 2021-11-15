public class Factorial24{
    public static void main(String[] args){
        int number = 24;
        long fact = 1;
        int i = 1;
        
        while(i<=number){
            if(number%i==0){
                System.out.println(i);
            }
            i++;
        }
    }
}