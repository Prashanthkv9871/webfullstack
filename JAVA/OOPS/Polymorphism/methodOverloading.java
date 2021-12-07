class parent{
    public void m1(){
        System.out.println("Method Overloading without argument");
    }

    public void m1(int i){
        System.out.println("m1 overloading int argument ");
    }

    public void m1(float f){
        System.out.println("m1 overloading float argument ");
    }
}

public class methodOverloading extends parent{
    public static void main(String[] args){
        methodOverloading obj = new methodOverloading();
        obj.m1(); 
        obj.m1(20);
        obj.m1('A');
        obj.m1(20.25f);
    }
}