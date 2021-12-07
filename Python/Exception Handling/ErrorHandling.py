try:
    print("Division Of two Numbers")
    a = int(input("Enter First Number : "))
    b = int(input("Enter second Number : "))
    c = a/b
    print("Result : ",int(c))
    
except ZeroDivisionError:
    print("Enter Number cannot divide")
    
except ValueError:
    print("Enter Valid Number")