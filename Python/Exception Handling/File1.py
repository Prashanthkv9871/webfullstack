try:
    f1 = open("one.txt","r")
    x = f1.read()
    print(x)
  
#except block will execute only when try block raise an exception.
#if try block not raise an exception it won't execute the except block

except FileNotFoundError as message:
    print("File not found",message)