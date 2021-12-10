class Parent:
    def __init__(self):
        print("Parent Constructor")
        
    def m1(self):
        print("Parent Instance Method 1")
    
    @classmethod
    def m2(cls):
        print("Parent class method")
        
    @staticmethod
    def m3():
        print("Parent static method")
        
class Child(Parent):
    def __init__(self):
        print("Child Constructor")
        super().__init__()
        super().m1()
        super().m2()
        super().m3()
        print(" ======================= ")
        
    def show(self):
        super().__init__()
        super().m1()
        super().m2()
        super().m3()
        print(" ====================== ")
        
    @classmethod
    def display(cls):
        #super().__init__()  #we cannot access parent constructor and instance method by using class method
        #super().m1()
        super().m2()
        super().m3()
        
    @staticmethod
    def display1():
        #super().__init__()   #cannot access parent constructor
        #super().m1()         #cannot access parent instance method
        #super().m2()         #cannot access parent class method
        #super().m3()         #cannot access parent static method
        pass
c = Child()
c.show()
c.display()
c.display1()