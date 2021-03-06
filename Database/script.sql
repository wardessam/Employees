USE [master]
GO
/****** Object:  Database [Employees]    Script Date: 22-May-22 7:39:24 PM ******/
CREATE DATABASE [Employees]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Employees', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Employees.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Employees_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Employees_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Employees] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Employees].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Employees] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Employees] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Employees] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Employees] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Employees] SET ARITHABORT OFF 
GO
ALTER DATABASE [Employees] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Employees] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Employees] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Employees] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Employees] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Employees] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Employees] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Employees] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Employees] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Employees] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Employees] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Employees] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Employees] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Employees] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Employees] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Employees] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Employees] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Employees] SET RECOVERY FULL 
GO
ALTER DATABASE [Employees] SET  MULTI_USER 
GO
ALTER DATABASE [Employees] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Employees] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Employees] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Employees] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Employees] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Employees] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Employees', N'ON'
GO
ALTER DATABASE [Employees] SET QUERY_STORE = OFF
GO
USE [Employees]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 22-May-22 7:39:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[dept_id] [int] IDENTITY(1,1) NOT NULL,
	[dept_name] [varchar](300) NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[dept_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 22-May-22 7:39:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[emp_id] [int] IDENTITY(1,1) NOT NULL,
	[emp_firstname] [varchar](300) NULL,
	[emp_lastname] [varchar](300) NULL,
	[emp_birthdate] [date] NULL,
	[emp_address] [varchar](300) NULL,
	[emp_phone] [varchar](300) NULL,
	[emp_mobile] [varchar](300) NULL,
	[emp_photo_filename] [varchar](500) NULL,
	[emp_dept_id] [int] NULL,
	[emp_age] [int] NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[emp_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee_Family]    Script Date: 22-May-22 7:39:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee_Family](
	[family_member_id] [int] IDENTITY(1,1) NOT NULL,
	[family_member_name] [varchar](300) NULL,
	[family_member_relation] [varchar](300) NULL,
	[family_member_empID] [int] NULL,
 CONSTRAINT [PK_Employee_Family] PRIMARY KEY CLUSTERED 
(
	[family_member_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Department] ON 

INSERT [dbo].[Department] ([dept_id], [dept_name]) VALUES (2, N'Front End')
INSERT [dbo].[Department] ([dept_id], [dept_name]) VALUES (3, N'Full Stack')
INSERT [dbo].[Department] ([dept_id], [dept_name]) VALUES (5, N'Back End')
INSERT [dbo].[Department] ([dept_id], [dept_name]) VALUES (18, N'Dev Ops2')
INSERT [dbo].[Department] ([dept_id], [dept_name]) VALUES (1013, N'AI')
INSERT [dbo].[Department] ([dept_id], [dept_name]) VALUES (1014, N'ML')
SET IDENTITY_INSERT [dbo].[Department] OFF
GO
SET IDENTITY_INSERT [dbo].[Employee] ON 

INSERT [dbo].[Employee] ([emp_id], [emp_firstname], [emp_lastname], [emp_birthdate], [emp_address], [emp_phone], [emp_mobile], [emp_photo_filename], [emp_dept_id], [emp_age]) VALUES (1011, N'Wardshan', N'Essam', CAST(N'1999-11-27' AS Date), N'Cairo', N'01010043053', N'01119192692', N'https://localhost:7129/Photos/ward.jpg', 3, 23)
INSERT [dbo].[Employee] ([emp_id], [emp_firstname], [emp_lastname], [emp_birthdate], [emp_address], [emp_phone], [emp_mobile], [emp_photo_filename], [emp_dept_id], [emp_age]) VALUES (1015, N'Noga', N'Ahmed', CAST(N'1996-10-08' AS Date), N'Cairo', N'01119192222', N'01119192655', N'https://localhost:7129/Photos/1.png', 1013, 0)
INSERT [dbo].[Employee] ([emp_id], [emp_firstname], [emp_lastname], [emp_birthdate], [emp_address], [emp_phone], [emp_mobile], [emp_photo_filename], [emp_dept_id], [emp_age]) VALUES (1016, N'Ahmed', N'Mohamed', CAST(N'1992-06-17' AS Date), N'Cairo', N'01119192689', N'01119192633', N'https://localhost:7129/Photos/boy.jpg', 1014, 30)
SET IDENTITY_INSERT [dbo].[Employee] OFF
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_Department] FOREIGN KEY([emp_dept_id])
REFERENCES [dbo].[Department] ([dept_id])
GO
ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_Department]
GO
ALTER TABLE [dbo].[Employee_Family]  WITH CHECK ADD  CONSTRAINT [FK_Employee_Family_Employee] FOREIGN KEY([family_member_empID])
REFERENCES [dbo].[Employee] ([emp_id])
GO
ALTER TABLE [dbo].[Employee_Family] CHECK CONSTRAINT [FK_Employee_Family_Employee]
GO
USE [master]
GO
ALTER DATABASE [Employees] SET  READ_WRITE 
GO
