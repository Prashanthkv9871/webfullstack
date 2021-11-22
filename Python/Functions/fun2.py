def add():
    print("Additon")

add()
print(type(add))

def add(a,b):
    print(a+b)
    
add(20,10)  # default arguments
add(30,40)

def div(x,y):
    print(x/y)

div(x=30,y=10) # Named or keyword arguments
div(y=10,x=30)

def add(*a):
    total = 0
    for value in a:
        total  = total + value
    print(total)
        
add()
add(10,20)
add(20,39,90)