public class fibonaci17{
    public static void main(String[] args){
        int i=0, j=1,k;

        while(i<=17){
            System.out.println(i); 
            k=i+j;
            i=j;
            j=k;
        }
    }
}
