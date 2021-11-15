public class print15to10{
    public static void main(String[] args){
        System.out.println("Using for loop");
        for(int i=15;i>=10;i--){
            System.out.println(i);
        }

        System.out.println("Using while loop");
        int j=15;
        while(j>=10){
            System.out.println(j); 
            j--;   
        }

        System.out.println("Using do while loop");
        int k=15;
        do{
            System.out.println(k); 
            k--;   
        }while(k>=10);
    }
}