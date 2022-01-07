import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

mycursor.execute("drop table if exists customer")

mydb.commit()

mydb.close()