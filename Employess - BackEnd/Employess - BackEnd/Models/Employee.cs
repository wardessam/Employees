namespace Employess___BackEnd.Models
{
    public class Employee
    {
        public int employeeID { get; set; }
        public string employee_firstname { get; set; }
        public string employee_lastname { get; set; }
        public string employee_birthdate { get; set; }
        public string employee_address { get; set; }
        public string employee_phone { get; set; }
        public string employee_mobile { get; set; }
        public string employee_photo { get; set; }
        public int employee_dept_id { get; set; }
        public int employee_age { get; set; }
        public List<EmployeeFamilyMember> members = new List<EmployeeFamilyMember>();

        public void calculateAge(int age)
        {
            this.employee_age = age;
        }
    }
}
