using System;
using System.Collections.Generic;

namespace BuildMart.Models
{
    public partial class User
    {
        public User()
        {
            Addresses = new HashSet<Address>();
            Carts = new HashSet<Cart>();
            ConstructionCompanies = new HashSet<ConstructionCompany>();
            ConstructionMaterialVendors = new HashSet<ConstructionMaterialVendor>();
            IndividualCustomers = new HashSet<IndividualCustomer>();
            Orders = new HashSet<Order>();
            Reviews = new HashSet<Review>();
            ServiceProviders = new HashSet<ServiceProvider>();
        }

        public int Id { get; set; }
        public string? ActiveStatus { get; set; }
        public string? Answer { get; set; }
        public string? Password { get; set; }
        public string? Username { get; set; }
        public int? QuestionId { get; set; }
        public int? RoleId { get; set; }

        public virtual Question? Question { get; set; }
        public virtual Role? Role { get; set; }
        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<ConstructionCompany> ConstructionCompanies { get; set; }
        public virtual ICollection<ConstructionMaterialVendor> ConstructionMaterialVendors { get; set; }
        public virtual ICollection<IndividualCustomer> IndividualCustomers { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual ICollection<ServiceProvider> ServiceProviders { get; set; }
    }
}
