use Task

Create Table Customers 
(
	Customer_ID int primary key,
	Customer_Name varchar(255),
	Customer_Address varchar(max),
	Mobile varchar(20),
	Phone1 varchar(20),
	Phone2 varchar(20),
	Whatsapp varchar(20),
	Email nvarchar(320),
	Customer_Code varchar(255),
	Nationality varchar(255),
	Resolved_Residence varchar(max),
	Details varchar(max),
	Occupation varchar(255),
	Introduced_By varchar(255),
	Entry_Date date,
	Last_Update varchar(255),
	Last_Modified_In date,
	Salesman varchar(255),
	Client_Source varchar(255),
	Customer_Rating varchar(255),
)


Create Table Phone_Calls
(
	Phone_Call_ID int primary key,
	Details varchar(max),
	Call_Address varchar(max),
	Date date,
	Project varchar(255),
	Employee varchar(255),
	Was_Done bit,
	Call_Type varchar(255),
	Was_Income bit,
	Introduced_By varchar(255),
	Entry_Date date,
	Last_Update varchar(255),
	Last_Modified_In date,
	Customer_ID int foreign key references Customers(Customer_ID)
)
