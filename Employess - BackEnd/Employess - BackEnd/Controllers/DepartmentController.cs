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
    public class DepartmentController : ControllerBase
    {
        private readonly IConfiguration configuration;
        public DepartmentController(IConfiguration con)
        {
            configuration = con;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                 select * from Department";
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
        public JsonResult Post(Department dept)
        {
            //There is a better way here for query is to use stored procedures.
            string query = @"
                 insert into Department (dept_name) values ('" + dept.departmentName + "')";
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
        public JsonResult Put(Department dept)
        {
            //There is a better way here for query is to use stored procedures.
            string query = @"
                 update Department set dept_name ='" + dept.departmentName + "' " +
                 "where dept_id=" + dept.departmentID + "";
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
                 delete from Department where dept_id=" + id + "";
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
        [Route("GetDeptName/{id}")]
        [HttpGet]
        public JsonResult getDeptName(int id)
        {
            string query = @"
                 select dept_name from Department where dept_id='"+id+"'";
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
        [Route("GetDeptID")]
        [HttpGet]
        public JsonResult getDeptID(Department d)
        {
            string query = @"
                 select dept_id from Department where dept_name='" + d.departmentName + "'";
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
    }
}
