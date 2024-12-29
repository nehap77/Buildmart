using System;
using System.Collections.Generic;

namespace BuildMart.Models
{
    public partial class Address
    {
        public Address()
        {
            Orders = new HashSet<Order>();
        }

        public int Id { get; set; }
        public string? AddLine { get; set; }
        public int? AreaId { get; set; }
        public int? UserId { get; set; }

        public virtual Area? Area { get; set; }
        public virtual User? User { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
