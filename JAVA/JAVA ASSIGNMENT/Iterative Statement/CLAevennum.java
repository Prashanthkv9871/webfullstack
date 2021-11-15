public class CLAevennum{
    public static void main(String[] args){
        
        for(int i=0;i<=args.length-1;i++){
            int num = Integer.parseInt(args[i]);
            if(num%2==0){
                System.out.println("even : "+ num);
            }
            
        }
    }
}