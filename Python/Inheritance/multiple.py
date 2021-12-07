class parent1:
    def m1(self):
        print("Method - parent1")
        
class parent2:
    def m2(self):
        print("Method parent2")
        
class child(parent2,parent1):
    def m3(self):
        print("Method 3")
        
c1=child()
c1.m1()
c1.m2()
c1.m3()



