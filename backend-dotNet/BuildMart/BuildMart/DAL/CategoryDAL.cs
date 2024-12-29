using BuildMart.Models;

namespace BuildMart.DAL
{
    public class CategoryDAL
    {
       

        public List<Category> GetCategories()
        {
            List<Category> categories = new List<Category>();
            using (var db = new newbuildContext())
            {
                categories = db.Categories.ToList();
            }
            return categories;
          

        }
    }
}
