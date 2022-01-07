import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

mycursor.execute("ALTER TABLE customers add column age int")