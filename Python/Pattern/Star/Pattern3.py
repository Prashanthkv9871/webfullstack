n  = int(input("Please Enter Number : "))

for i in range(n):
    print("* "*(i+1))


print("Or using inner for loop")

for i in range(n):
    for j in range(i+1):
        print("*",end=" ")
    print()


print("Using while loop")

i=0
while i<n:
    print("* "*(i+1))
    i=i+1


