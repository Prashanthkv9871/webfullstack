n = int(input("Please Enter Number : "))

print("Using for loop")
for i in range(n):
    print("*",end=" ")

print("\nUsing while Loop")

i = 0
while i<n:
    print("*",end=" ")
    i = i+1
