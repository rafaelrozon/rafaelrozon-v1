using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rafaelrozon.Models
{
    public class Image
    {
        public int ID { get; set; }

        public String  Title { get; set; }

        public String Source { get; set;  }

        public String Description { get; set; }

        public DateTime Date { get; set; }

        public int Status { get; set; }
    }
}
