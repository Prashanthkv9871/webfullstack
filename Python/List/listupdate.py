list1=[20,30,90]
list2=[70,60,80]
print(list1)
print(list2)

print("append the value to list1")
list1.append(100)
print(list1)


print("Extends list1 and list2") 
list1.extend(list2)
print(list1)

print("Insert")
list1.insert(3,70)
print(list1)

print("Insert in Negative indexing")
list1.insert(-10,150)
print(list1)