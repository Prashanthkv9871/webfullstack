import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

mycursor.execute("select * from customers")

result = mycursor.fetchall()

for x in result:
    print(x)

print("************************************************************")
mycursor.execute("select name,address from customers where address='kolar'")
result1 = mycursor.fetchall()
for i in result1:
    print(i)

print("*************************************************************")
mycursor.execute("select * from customers where address like '%re%'")
result2 = mycursor.fetchall()
for i in result2:
    print(i)
