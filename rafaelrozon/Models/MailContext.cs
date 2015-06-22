using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rafaelrozon.Models
{
    public class MailContext : DbContext 
    {
         public MailContext()
            : base("DefaultConnection")
        { }

        DbSet<MailModel> MailModel { get; set; }
    }
}
