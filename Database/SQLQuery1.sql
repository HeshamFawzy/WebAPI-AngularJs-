use Task

Create Table Customers 
(
	Customer_ID int primary key IDENTITY(1,1),
	Customer_Name nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Customer_Address nvarchar(max) COLLATE Arabic_CI_AI_KS_WS,
	Mobile nvarchar(20) COLLATE Arabic_CI_AI_KS_WS,
	Phone1 nvarchar(20) COLLATE Arabic_CI_AI_KS_WS,
	Phone2 nvarchar(20) COLLATE Arabic_CI_AI_KS_WS,
	Whatsapp nvarchar(20) COLLATE Arabic_CI_AI_KS_WS,
	Email nvarchar(320),
	Customer_Code nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Nationality nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Resolved_Residence nvarchar(max) COLLATE Arabic_CI_AI_KS_WS,
	Details nvarchar(max) COLLATE Arabic_CI_AI_KS_WS,
	Occupation nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Introduced_By nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Entry_Date date,
	Last_Update nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Last_Modified_In date,
	Salesman nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Client_Source nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Customer_Rating nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
)


Create Table Phone_Calls
(
	Phone_Call_ID int primary key IDENTITY(1,1),
	Details nvarchar(max) COLLATE Arabic_CI_AI_KS_WS,
	Call_Address nvarchar(max) COLLATE Arabic_CI_AI_KS_WS,
	Date date,
	Project nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Employee nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Was_Done bit,
	Call_Type nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Was_Income bit,
	Introduced_By nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Entry_Date date,
	Last_Update nvarchar(255) COLLATE Arabic_CI_AI_KS_WS,
	Last_Modified_In date,
	Customer_ID int foreign key references Customers(Customer_ID)
)
