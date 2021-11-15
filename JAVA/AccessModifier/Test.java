abstract class AB{
    abstract public void m1();
    public void m2(){
        System.out.println("Method m2");
    }
}
class Test extends AB{
    public void m1(){
        System.out.println("Hello , Class A Abstract Methods:");
    }
    public static void main(String[] args){
        Test t = new Test();
        t.m1();
        t.m2();
    }
}