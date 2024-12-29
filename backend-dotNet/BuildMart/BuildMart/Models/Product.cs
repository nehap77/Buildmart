using System;
using System.Collections.Generic;

namespace BuildMart.Models
{
    public partial class Product
    {
        public Product()
        {
            VendorProducts = new HashSet<VendorProduct>();
        }

        public int Id { get; set; }
        public string? Description { get; set; }
        public string? ProductName { get; set; }
        public int? StockQuantity { get; set; }
        public int? Cid { get; set; }
        public byte[]? Picture { get; set; }

        public virtual Category? CidNavigation { get; set; }
        public virtual ICollection<VendorProduct> VendorProducts { get; set; }
    }
}
