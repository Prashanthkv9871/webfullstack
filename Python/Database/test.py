import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123")

print(mydb)

data = mydb.cursor()

print(data)

data1=data.execute("create database Employees")

print(data1)
mydb.close()










