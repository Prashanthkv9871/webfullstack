import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

mycursor.execute("create table customer(cid int auto_increment primary key ,name varchar(50), address varchar(255))")
