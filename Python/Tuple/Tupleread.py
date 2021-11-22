tuple1 = (90,45,"Amar",True)

print(type(tuple1))

print(tuple1[1])

print(tuple1[0:2:1])

print("Printing values by using for loop")
for value in tuple1:
    print(value)
    

print("Printing values by Using while loop")
i  = 0
while(i<len(tuple1)):
    print(tuple1[i])
    i = i+1