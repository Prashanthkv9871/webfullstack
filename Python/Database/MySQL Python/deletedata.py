import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

mycursor.execute("delete from customers where address='mandya'")

mydb.commit()

print(mycursor.rowcount,"records deleted")

