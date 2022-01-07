import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

sql = "insert into customers(name,address,age) values(%s,%s,%s)"
val = ("Prashanth","kolar",24)
mycursor.execute(sql,val)

mydb.commit()

print(mycursor.rowcount,"record inserted")
