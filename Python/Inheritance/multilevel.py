class parent:
    def m1(self):
        print("Method 1")
        
class child(parent):
    def m2(self):
        print("Method 2")
        
class Grandchild(child):
    def m3(self):
        print("Method 3")
        
        
c1=Grandchild()
c1.m1()
c1.m2()
c1.m3()