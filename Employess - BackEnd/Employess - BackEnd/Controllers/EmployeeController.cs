using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Employess___BackEnd.Models;
namespace Employess___BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment webHostEnvironment;
        public EmployeeController(IConfiguration con,IWebHostEnvironment env)
        {
            configuration = con;
            webHostEnvironment = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                 select emp_id,emp_firstname,emp_lastname, convert(varchar(10),emp_birthdate,120) as emp_birthdate,
                  emp_address,emp_phone,emp_mobile,emp_photo_filename,emp_dept_id,emp_age from Employee";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            //There is a better way here for query is to use stored procedures.
            string query = @"
                 insert into Employee (emp_firstname,emp_lastname, emp_birthdate,emp_address,emp_phone,emp_mobile,
                  emp_photo_filename, emp_dept_id,emp_age)
                 values ('" + emp.employee_firstname +"','"+emp.employee_lastname+
                 "','" + emp.employee_birthdate+"','" + emp.employee_address + "','" + emp.employee_phone+
                 "','" + emp.employee_mobile + "','" + emp.employee_photo +
                 "','" + emp.employee_dept_id + "','" + emp.employee_age + "')";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult("Added Successfully!");
        }
        [HttpPut]
        public JsonResult Put(Employee emp)
        {
            //There is a better way here for query is to use stored procedures.
            string query = @"
                 update Employee set emp_firstname ='" + emp.employee_firstname + "' "
                 +", emp_lastname ='" + emp.employee_lastname + "'"
                 +", emp_birthdate ='" + emp.employee_birthdate + "'" 
                  +", emp_address ='" + emp.employee_address + "'"
                   + ", emp_phone ='" + emp.employee_phone + "'"
                    + ", emp_mobile ='" + emp.employee_mobile + "'"
                     + ", emp_photo_filename ='" + emp.employee_photo + "'"
                      + ", emp_dept_id ='" + emp.employee_dept_id + "'"
                       + ", emp_age ='" + emp.employee_age + "'" +
                "where emp_id=" + emp.employeeID + "";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult("Updated Successfully!");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            //There is a better way here for query is to use stored procedures.
            string query = @"
                 delete from Employee where emp_id=" + id + "";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult("Deleted Successfully!");
        }
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physcialPath = webHostEnvironment.ContentRootPath + "/wwwroot/Photos/" + filename;
                
                using(var stream = new FileStream(physcialPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);

                }
                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("unknown.jpg");
            }
        }
        [Route("GetAllDepartmentsNames")]
        [HttpGet]
        public JsonResult GetAllDepartmentsNames()
        {
            string query = @"
                 select dept_name from Department";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult(table);
        }
        [Route("GetFamilyMembers/{id}")]
        [HttpGet]
        public JsonResult GetFamilyMembers(int id)
        {
            string query = @"
                 select * from Employee_Family where family_member_empID='"+id+"'";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult(table);
        }

        [Route("AddFamilyMember")]
        [HttpPost]
        public JsonResult AddFamilyMember(EmployeeFamilyMember member)
        {
            string query = @"
                 insert into Employee_Family values ('"+member.familyMemberName+"','"+member.familyMemberRelation
                 + "','" + member.familyMember_empID+"')";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult("Added Successfully!");
        }
        //Delete all family members to specific employee
        [Route("DeleteFamilyMembers/{id}")]
        [HttpDelete]
        public JsonResult DeleteFamilyMembers(int id)
        {
            string query = @"
                 delete from Employee_Family where family_member_empID ='"+id+"'";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult("Deleted Successfully!");
        }
        //delete specific family member
        [Route("DeleteFamilyMember/{id}")]
        [HttpDelete]
        public JsonResult DeleteFamilyMember(int id)
        {
            string query = @"
                 delete from Employee_Family where family_member_id ='" + id + "'";
            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader dataReader;
            using (SqlConnection Con = new SqlConnection(sqlDataSource))
            {
                Con.Open();
                using (SqlCommand command = new SqlCommand(query, Con))
                {
                    dataReader = command.ExecuteReader();
                    table.Load(dataReader);

                    dataReader.Close();
                    Con.Close();
                }
            }
            return new JsonResult("Deleted Successfully!");
        }
    }
}
