// 10. Write a Java Program to print given 3 numbers in ascending order?

import java.io.*;
import java .util.*;

public class Ascending{
    public static void main(String[] args){
        int[] num = {40,20,50};
        Arrays.sort(num);
        
        for(int i = 0; i<num.length; i++){
            System.out.println(num[i]);
        }
        
    }
}