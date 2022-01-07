import mysql.connector

mydb = mysql.connector.connect(host="localhost" , user="root" , password="root123",database="employees")
mycursor = mydb.cursor()
mycursor.execute("CREATE TABLE Emp (eid INT AUTO_INCREMENT PRIMARY KEY, ename VARCHAR(255), address VARCHAR(255))")