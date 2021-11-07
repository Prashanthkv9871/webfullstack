class Declaration{
    public static void main(String[] args){
        //Array Declaration
        int[] arr;
        //Array creation
        arr = new int[3];

        System.out.println(arr);
        //How to read Array Values;
        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
        //System.out.println(arr[3]);//AIOBException
        arr[0]=38;
        arr[1]=40;
        arr[2]=42;

        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
    }
}


//java -System.out.println(Object);
//js- console.log(object);
//python - print()