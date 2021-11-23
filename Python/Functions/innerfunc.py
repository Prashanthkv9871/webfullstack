def outer():
    print("Outer Function")
    def inner():
        print("Inner Function")
        return 10,True,"Prashanth"
    return inner()

result = outer()
print(result)