import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="root123",database="mydatabase")

mycursor = mydb.cursor()

sql = "insert into customers(name,address,age) values(%s,%s,%s)"
val = [("Vashir","Mandya",25),
       ("kiran","Bijapura",24),
       ("Shiva kumar","Mysore",24)]
mycursor.executemany(sql,val)

mydb.commit()

print(mycursor.rowcount,"record inserted")
