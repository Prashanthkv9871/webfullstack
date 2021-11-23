def division(func):
    print(func.__name__)
    
    def abc(a,b):
        print("Value of a , ",a ,"value of b , " , b)
        return func(a,b)
    return abc

@division
def div(a,b):
    print(a/b)
    
div(20,10)