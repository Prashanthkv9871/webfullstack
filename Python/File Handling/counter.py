f = open("test.txt",'r')
data = f.readlines()
lc=0
wc=0
cc=0
for line in  data:
    lc = lc+1
    word = line.split()
    wc = wc + len(word)
    cc = cc + len(line)

print(lc,wc,cc)