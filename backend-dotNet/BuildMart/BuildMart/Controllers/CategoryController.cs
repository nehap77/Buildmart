using BuildMart.DAL;
using BuildMart.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BuildMart.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CategoryController : ControllerBase
    {
       // CategoryDAL categoryDAL;
       /* CategoryController(CategoryDAL categoryDAL)
        {
            this.categoryDAL = categoryDAL;
        }
       */
        [HttpGet("categories")]
        public List<Category> GetAllCategories()
        {
            List<Category> categories = new List<Category>();
            using (var db = new newbuildContext())
            {
                categories = db.Categories.ToList();
            }
            return categories;
        }

        [HttpGet("customers")]
        public List<IndividualCustomer> GetIndividualCustomers()
        {
            List<IndividualCustomer> customers = new List<IndividualCustomer>();
            using(var db=new newbuildContext())
            {
                customers=db.IndividualCustomers.ToList();
            }
            return customers;
        }
            


       


        

    }
}
