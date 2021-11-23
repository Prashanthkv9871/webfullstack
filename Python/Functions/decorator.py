def smart_divide(func):
    print(func.__name__)
    def div(a,b):
        print(a,b)
        if b==0:
            print("whoops ! zero cannot divisibly")
            return
        return func(a,b)
    return div
@smart_divide
def division(a,b):
    print(a/b)
    
division(40,0)       