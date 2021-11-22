def add():
    print("hello")
    
add()

def add(a,b):
    c=a+b
    print(c)
    
add(10,30)


def sub():
    return 10,20,"Hello",True

result = sub()
print(result)

for i in result:
    print(i)