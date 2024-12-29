using System;
using System.Collections.Generic;

namespace BuildMart.Models
{
    public partial class ConstructionMaterialVendor
    {
        public ConstructionMaterialVendor()
        {
            MembershipPayments = new HashSet<MembershipPayment>();
            Reviews = new HashSet<Review>();
            VendorProducts = new HashSet<VendorProduct>();
        }

        public int Id { get; set; }
        public string? ContactNumber { get; set; }
        public string? Email { get; set; }
        public string? ShopName { get; set; }
        public int? Uid { get; set; }
        public string? RegNo { get; set; }
        public int? Valid { get; set; }

        public virtual User? UidNavigation { get; set; }
        public virtual ICollection<MembershipPayment> MembershipPayments { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual ICollection<VendorProduct> VendorProducts { get; set; }
    }
}
