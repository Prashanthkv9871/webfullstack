// 12. Write a program to print numbers from 1 to 10 - Using for Loop , for-Each, While and do() While loop

public class Print1To10{
    public static void main(String[] args){
        // for loop
        System.out.println("Prints number 1 to 10 by using for loop : ");
        for(int i=1;i<=10;i++){
            System.out.print( i +" ");
        }

        System.out.println("");
        // while loop
        System.out.println("Prints number 1to 10 by using While loop : ");
        int i =1;
        while(i <=10){
            System.out.print(i +" ");
            i++;
        }


        System.out.println("");
        // do while loop
        System.out.println("Prints number 1to 10 by using do While loop : ");
        int j =1;
        do{
            System.out.print(j +" ");
            j++;
        }while(j <= 10);

        System.out.println("");
        // forEach loop
        System.out.println("Prints number 1to 10 by using forEach loop : ");
        int numbers[] ={1,2,3,4,5,6,7,8,9,10};
        for(int number:numbers){
            System.out.print(number+ " ");
        }
    }
}