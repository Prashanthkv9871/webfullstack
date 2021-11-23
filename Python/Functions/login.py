def login():
    cust_id = 101
    
    def get_cust_id():
        print("Customer Id : ",cust_id)
        return 10
    return get_cust_id

x = login()
x()
print(x())