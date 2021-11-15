class varArgs{
    public static void getValues(int... b){
        int result = 0;
        for( int a:b){
            result = result + a;
        }
        System.out.println(result);
    }
    public static void main(String... args){
        getValues(10,20,30,40,50);
        getValues(10);
    }
}