﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using StoreApp.Models;

namespace StoreApp.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<StoreApp.Models.Item> Item { get; set; } = default!;
        public DbSet<StoreApp.Models.Users> Users { get; set; } = default!;

        public DbSet<StoreApp.Models.CartItem> CartItems { get; set; }
    }
}
