list1 = [38,56,"hello",46]
print(list1[1])    # to read value using Indexing

print(list1[-2] ,end="\n\n")  # to read value using  Reverse Indexing

print("Using for loop" )
# using for loop
for i in list1:
    print(i)
    
    
print()
print("Using while loop")
# using while loop
i=0
while i<=len(list1)-1:
    print(list1[i])
    i = i +1
    

print()
print("using range")
for i in range(len(list1)):
    print(list1[i])
    
    
    