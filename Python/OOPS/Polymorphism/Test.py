class Parent:
    def __init__(self):
        
        print(id(self))
        
class Child(Parent):
    def __init__(self):
        print("Child Constructor ")
        super().__init__()
        print(id(self))
        
c = Child()
print(id(c)) # child object reference is created 