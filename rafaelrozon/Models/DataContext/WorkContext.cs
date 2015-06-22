using rafaelrozon.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rafaelrozon.Models.DataContext
{
    public class WorkContext : DbContext
    {
        public WorkContext() : base("DefaultConnection") { }

        public DbSet<Work> Work { get; set; }

        public DbSet<Categories> Categories { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<Book> Books { get; set; }

        public DbSet<Resource> Resources { get; set; }

    }
}
