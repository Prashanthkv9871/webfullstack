public class evenOrodd{
    public static void main(String[] a){
        for(int i =0;i<=a.length-1;i++){
            int x = Integer.parseInt(a[i]);
            if(x % 2 == 0){
            System.out.println(x + " is Even Number");
            }
            else{
            System.out.println(x + " is Odd Number");
            }
        }
        
    }
}