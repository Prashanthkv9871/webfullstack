class parent:
    def m1(self):
        print("Method - 1")
        
class child(parent):
    def m2(self):
        print("Method - 2")
        
c1=child()

c1.m1()
c1.m2()