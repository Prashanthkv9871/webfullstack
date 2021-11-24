price = 100
discount = 35

def cal_price():
    return price-(price*0.35) # return price-(discout/100)*price

result= cal_price()
print(result)