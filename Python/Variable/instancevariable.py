class Employee:
    def __init__(self):
        self.emp_id=101
        self.emp_Name="prashanth"
        
    def setvalue(self):        # instance method / Function
        print(self.emp_id)
        
e = Employee()
e.sal=40000
print(e.__dict__)
e.setvalue()
