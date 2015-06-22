using rafaelrozon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rafaelrozon.Models
{
    public class Categories
    {
        public int ID { get; set; }

        public String Name { get; set; }

        public int Status { get; set; }

        public String Description { get; set; }

        public ICollection<Work> Works { get; set; }

        public Categories()
        {
            Works = new List<Work>();

        }
    }
}
