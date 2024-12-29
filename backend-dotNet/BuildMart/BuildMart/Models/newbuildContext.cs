using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BuildMart.Models
{
    public partial class newbuildContext : DbContext
    {
        public newbuildContext()
        {
        }

        public newbuildContext(DbContextOptions<newbuildContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; } = null!;
        public virtual DbSet<Area> Areas { get; set; } = null!;
        public virtual DbSet<Cart> Carts { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<ConstructionCompany> ConstructionCompanies { get; set; } = null!;
        public virtual DbSet<ConstructionMaterialVendor> ConstructionMaterialVendors { get; set; } = null!;
        public virtual DbSet<IndividualCustomer> IndividualCustomers { get; set; } = null!;
        public virtual DbSet<MembershipPayment> MembershipPayments { get; set; } = null!;
        public virtual DbSet<Order> Orders { get; set; } = null!;
        public virtual DbSet<OrderItem> OrderItems { get; set; } = null!;
        public virtual DbSet<OrderStatus> OrderStatuses { get; set; } = null!;
        public virtual DbSet<Plan> Plans { get; set; } = null!;
        public virtual DbSet<Product> Products { get; set; } = null!;
        public virtual DbSet<Question> Questions { get; set; } = null!;
        public virtual DbSet<Review> Reviews { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<ServiceProvider> ServiceProviders { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<VendorProduct> VendorProducts { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=newbuild", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.ToTable("address");

                entity.HasIndex(e => e.UserId, "FK6i66ijb8twgcqtetl8eeeed6v");

                entity.HasIndex(e => e.AreaId, "FKrgwfi8lanaq12p2pwrvcy1j8n");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AddLine)
                    .HasMaxLength(255)
                    .HasColumnName("add_line");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.AreaId)
                    .HasConstraintName("FKrgwfi8lanaq12p2pwrvcy1j8n");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK6i66ijb8twgcqtetl8eeeed6v");
            });

            modelBuilder.Entity<Area>(entity =>
            {
                entity.ToTable("area");

                entity.HasIndex(e => e.CityId, "FK837wykfakx1ncapqbyeueb6pm");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Pincode)
                    .HasMaxLength(255)
                    .HasColumnName("pincode");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Areas)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("FK837wykfakx1ncapqbyeueb6pm");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.HasIndex(e => e.VendorProductId, "FKdwm79hmu39fl43u7vijrgkavh");

                entity.HasIndex(e => e.UserId, "FKg5uhi8vpsuy0lgloxk2h4w5o6");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.VendorProductId).HasColumnName("vendor_product_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FKg5uhi8vpsuy0lgloxk2h4w5o6");

                entity.HasOne(d => d.VendorProduct)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.VendorProductId)
                    .HasConstraintName("FKdwm79hmu39fl43u7vijrgkavh");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("description");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("cities");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CityName)
                    .HasMaxLength(255)
                    .HasColumnName("city_name");
            });

            modelBuilder.Entity<ConstructionCompany>(entity =>
            {
                entity.ToTable("construction_companies");

                entity.HasIndex(e => e.Uid, "FK600rg922wqno3wdkmrebyv5h7");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(255)
                    .HasColumnName("company_name");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(255)
                    .HasColumnName("contact_number");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.ConstructionCompanies)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("FK600rg922wqno3wdkmrebyv5h7");
            });

            modelBuilder.Entity<ConstructionMaterialVendor>(entity =>
            {
                entity.ToTable("construction_material_vendors");

                entity.HasIndex(e => e.Uid, "FKpxmktnf11fe4m0l884rd5gd6f");

                entity.HasIndex(e => e.ContactNumber, "contact_number_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.RegNo, "reg_no_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ContactNumber).HasColumnName("contact_number");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.RegNo)
                    .HasMaxLength(45)
                    .HasColumnName("reg_no");

                entity.Property(e => e.ShopName)
                    .HasMaxLength(255)
                    .HasColumnName("shop_name");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.Valid)
                    .HasColumnName("valid")
                    .HasDefaultValueSql("'0'");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.ConstructionMaterialVendors)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("FKpxmktnf11fe4m0l884rd5gd6f");
            });

            modelBuilder.Entity<IndividualCustomer>(entity =>
            {
                entity.ToTable("individual_customer");

                entity.HasIndex(e => e.UserId, "FKjgkdif4y6fwy5g5hoyulvh0s");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(255)
                    .HasColumnName("contact_number");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .HasColumnName("last_name");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IndividualCustomers)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FKjgkdif4y6fwy5g5hoyulvh0s");
            });

            modelBuilder.Entity<MembershipPayment>(entity =>
            {
                entity.ToTable("membership_payments");

                entity.HasIndex(e => e.PlanId, "FK7mh2qxkemikhrky85lul2sqhc");

                entity.HasIndex(e => e.VendorId, "FKnuuxbvgtg8j7pmowoeseafxkh");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.ExpiryDate).HasColumnName("expiry_date");

                entity.Property(e => e.PlanId).HasColumnName("plan_id");

                entity.Property(e => e.PurchaseDate).HasColumnName("purchase_date");

                entity.Property(e => e.TransactionId)
                    .HasMaxLength(255)
                    .HasColumnName("transaction_id");

                entity.Property(e => e.VendorId).HasColumnName("vendor_id");

                entity.HasOne(d => d.Plan)
                    .WithMany(p => p.MembershipPayments)
                    .HasForeignKey(d => d.PlanId)
                    .HasConstraintName("FK7mh2qxkemikhrky85lul2sqhc");

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.MembershipPayments)
                    .HasForeignKey(d => d.VendorId)
                    .HasConstraintName("FKnuuxbvgtg8j7pmowoeseafxkh");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("orders");

                entity.HasIndex(e => e.StatusId, "FK1abokg3ghque9pf2ujbxakng");

                entity.HasIndex(e => e.UserId, "FK32ql8ubntj5uh44ph9659tiih");

                entity.HasIndex(e => e.AddressId, "FKf5464gxwc32ongdvka2rtvw96");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AddressId).HasColumnName("address_id");

                entity.Property(e => e.FinalPaymentAmount).HasColumnName("final_payment_amount");

                entity.Property(e => e.FinalPaymentDate).HasColumnName("final_payment_date");

                entity.Property(e => e.FinalPaymentMode)
                    .HasMaxLength(255)
                    .HasColumnName("final_payment_mode");

                entity.Property(e => e.FinalPaymentTransactionId)
                    .HasMaxLength(255)
                    .HasColumnName("final_payment_transaction_id");

                entity.Property(e => e.InitialPaymentAmount).HasColumnName("initial_payment_amount");

                entity.Property(e => e.InitialPaymentDate).HasColumnName("initial_payment_date");

                entity.Property(e => e.InitialPaymentMode)
                    .HasMaxLength(255)
                    .HasColumnName("initial_payment_mode");

                entity.Property(e => e.InitialPaymentTransactionId)
                    .HasMaxLength(255)
                    .HasColumnName("initial_payment_transaction_id");

                entity.Property(e => e.OrderDate)
                    .HasColumnType("datetime")
                    .HasColumnName("order_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.StatusId)
                    .HasColumnName("status_id")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.TotalPrice).HasColumnName("total_price");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.AddressId)
                    .HasConstraintName("FKf5464gxwc32ongdvka2rtvw96");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("FK1abokg3ghque9pf2ujbxakng");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK32ql8ubntj5uh44ph9659tiih");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.ToTable("order_item");

                entity.HasIndex(e => e.VendorProductId, "FK1nsu2liolixbprqtb25irx0jh");

                entity.HasIndex(e => e.OrderId, "FKt4dc2r9nbvbujrljv3e23iibt");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.OrderId).HasColumnName("order_id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.VendorProductId).HasColumnName("vendor_product_id");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FKt4dc2r9nbvbujrljv3e23iibt");

                entity.HasOne(d => d.VendorProduct)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.VendorProductId)
                    .HasConstraintName("FK1nsu2liolixbprqtb25irx0jh");
            });

            modelBuilder.Entity<OrderStatus>(entity =>
            {
                entity.ToTable("order_status");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Status)
                    .HasMaxLength(255)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Plan>(entity =>
            {
                entity.ToTable("plans");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Duration).HasColumnName("duration");

                entity.Property(e => e.PlanName)
                    .HasMaxLength(255)
                    .HasColumnName("plan_name");

                entity.Property(e => e.Price).HasColumnName("price");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("products");

                entity.HasIndex(e => e.Cid, "FK15qxrbiip6pqxilyhspl7dfyb");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Cid).HasColumnName("cid");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .HasColumnName("description");

                entity.Property(e => e.Picture).HasColumnName("picture");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(255)
                    .HasColumnName("product_name");

                entity.Property(e => e.StockQuantity).HasColumnName("stock_quantity");

                entity.HasOne(d => d.CidNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK15qxrbiip6pqxilyhspl7dfyb");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.ToTable("questions");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Question1)
                    .HasMaxLength(255)
                    .HasColumnName("question");
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.ToTable("review");

                entity.HasIndex(e => e.VendorId, "FK3s339qi06imjimv5ruyeu8wao");

                entity.HasIndex(e => e.UserId, "FK6cpw2nlklblpvc7hyt7ko6v3e");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("description");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.VendorId).HasColumnName("vendor_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK6cpw2nlklblpvc7hyt7ko6v3e");

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.VendorId)
                    .HasConstraintName("FK3s339qi06imjimv5ruyeu8wao");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Role1)
                    .HasMaxLength(255)
                    .HasColumnName("role");
            });

            modelBuilder.Entity<ServiceProvider>(entity =>
            {
                entity.ToTable("service_providers");

                entity.HasIndex(e => e.Uid, "FKohlwfq5rgdtx3o5s72cvlcbk6");

                entity.HasIndex(e => e.ContactNumber, "contact_number_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ContactNumber).HasColumnName("contact_number");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.Experience).HasColumnName("experience");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .HasColumnName("last_name");

                entity.Property(e => e.Rates).HasColumnName("rates");

                entity.Property(e => e.Status)
                    .HasMaxLength(255)
                    .HasColumnName("status");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.ServiceProviders)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("FKohlwfq5rgdtx3o5s72cvlcbk6");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.QuestionId, "FKl0balba7embxdbwcjhxsb2kmy");

                entity.HasIndex(e => e.RoleId, "FKp56c1712k691lhsyewcssf40f");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ActiveStatus)
                    .HasMaxLength(255)
                    .HasColumnName("active_status");

                entity.Property(e => e.Answer)
                    .HasMaxLength(255)
                    .HasColumnName("answer");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.QuestionId).HasColumnName("question_id");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");

                entity.HasOne(d => d.Question)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("FKl0balba7embxdbwcjhxsb2kmy");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FKp56c1712k691lhsyewcssf40f");
            });

            modelBuilder.Entity<VendorProduct>(entity =>
            {
                entity.ToTable("vendor_product");

                entity.HasIndex(e => e.ProductId, "FK63117s2lux1fh85t151s1ej1g");

                entity.HasIndex(e => e.VendorId, "FKkx7dk6wsgi471bo7x4pq2g4jw");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.OfferPercentage).HasColumnName("offer_percentage");

                entity.Property(e => e.OfferValidDate).HasColumnName("offer_valid_date");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.VendorId).HasColumnName("vendor_id");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.VendorProducts)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK63117s2lux1fh85t151s1ej1g");

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.VendorProducts)
                    .HasForeignKey(d => d.VendorId)
                    .HasConstraintName("FKkx7dk6wsgi471bo7x4pq2g4jw");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
