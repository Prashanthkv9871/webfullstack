class parent{
    public void m1(){
        System.out.println("Parent class");
    }
}

class child extends parent{
    public void m2(){
        System.out.println("Child class");
    }
}

public class Test{
    public static void main(String[] args){
        child obj = new child();
        obj.m1();
        obj.m2();
    }
}