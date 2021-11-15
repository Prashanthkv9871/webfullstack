from sys import argv

print(argv)

a = argv[1:]
sum = 0
for i in a:
    sum = sum + int(i)
    
print(sum)
