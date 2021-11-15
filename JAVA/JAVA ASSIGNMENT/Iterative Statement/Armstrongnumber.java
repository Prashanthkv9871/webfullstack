public class Armstrongnumber{
    public static void main(String[] args){
        int sum=0;
        int number=153;
        // create a temporary variable
        int temp=number;

        while(temp>0) {
        // finding the ones digit
        int remaider=temp%10;
        sum+=remaider*remaider*remaider;   
        //removing last digit from the number
        temp=temp/10; 
        }
        //check the condition
        if(sum==number){
        System.out.println(number+" is an Armstrong number");
        }

        else{
        System.out.println(number+" is not an Armstrong number");
        }

    }
}

