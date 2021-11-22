d1={'Name':"Prashanth",'sal':35000, "Loc":"Bangalore",'Hobbies':'reading'}

d1.pop('Hobbies')
print(d1)

d1.popitem()
print(d1)

del d1['sal']
print(d1)

d1.clear()
print(d1)

del d1
# print(d1) #NameError: name 'd1' is not defined