import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

mycursor.execute("select * from customers order by name")

result = mycursor.fetchall()

for x in result:
    print(x)

print("*******************************************************")

mycursor.execute("select * from customers order by name desc")
result = mycursor.fetchall()

for x in result:
    print(x)