// 13. Write a program to calculate the sum of the first 10 natural numbers. - Using for Loop , for-Each, While and do() While loop

public class SumOf10Num{
    public static void main(String[] args){
        // for loop
        int sum = 0;
        for(int i=1;i<=10;i++){
            sum = sum + i; 
        }
        System.out.println("The Sum of the First 10 Natural numbers by using for loop : " + sum);


        // While Loop
        int j = 1;
        int add = 0;
        while(j<=10){
            add = add + j;
            j++;
        }
        System.out.println("The Addition of First 10 Natural numbers by using while loop : "+ add);

        // do while loop
        int k = 1;
        int addition = 0;
        do{
            addition = addition + k;
            k++;
        }while(k<=10);
        System.out.println("The Addition of First 10 Natural numbers by using do while loop : "+ addition);
    }
}
