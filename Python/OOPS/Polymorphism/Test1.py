class User:
    def __init__(self,name,age):
        self.name=name
        self.age=age
        
class Employee(User):
    def __init__(self,name,age,sal,eid):
        super().__init__(name,age)
        self.sal=sal
        self.eid=eid
        
e = Employee("Prashanth",24,45000,34)
print(e.__dict__)