using System;
using System.Collections.Generic;

namespace BuildMart.Models
{
    public partial class Plan
    {
        public Plan()
        {
            MembershipPayments = new HashSet<MembershipPayment>();
        }

        public int Id { get; set; }
        public int? Duration { get; set; }
        public string? PlanName { get; set; }
        public double? Price { get; set; }

        public virtual ICollection<MembershipPayment> MembershipPayments { get; set; }
    }
}
