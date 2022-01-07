import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123")

print(mydb)

mycursor = mydb.cursor()

mycursor.execute("show databases")

for x in mycursor:
    print(x)