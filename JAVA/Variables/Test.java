class Test{
    static String city = "Bangalore"; //class level variable 
    public static void main(String[] args){
        String Name="Prahanth";  //local variable
        System.out.println(Name);
        System.out.println(city);
        System.out.println(Test.city);
    }
}


//when we go for Static Variable ?

/* 
If values are no changing frequently we declare at class level. If you want declare class level we have to static keywords
*/