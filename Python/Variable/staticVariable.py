class Price:
    a = 10
    def Product(self):
        Price.b=200
       
    @classmethod
    def value(cls):
        cls.c=300
        Price.d=400
    @staticmethod
    def value1():
        Price.e=500
        
e = Price()
e.Product()
e.value()
e.value1()

print(e.__dict__)
print(Price.__dict__)