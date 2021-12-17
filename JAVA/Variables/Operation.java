class Operation{  
 int data=50;  
  
 void change(Operation op){  
 data=data+100;//changes will be in the local variable only  
 }  
     
 public static void main(String args[]){  
   Operation op=new Operation();  
  
   System.out.println("before change "+op.data);  
   op.change(op);  
   System.out.println("after change "+op.data);  
  
 }  
}  