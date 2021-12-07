String = input("Enter the String : ")
length = len(String)
for row in range(length):
    for col in range(row+1):
        print(String[col],end="")
    print()