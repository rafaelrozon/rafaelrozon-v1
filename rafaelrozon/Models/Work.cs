using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rafaelrozon.Models
{
    public class Work
    {
        
        public int ID { get; set; }

        public String  Title { get; set; }

        public String Description { get; set; }

        public int Status { get; set; }

        public String Client { get; set; }

        public DateTime Date { get; set; }

        public List<Image> Images { get; set; }

        public String Link { get; set; }

        public ICollection<Categories> Categories { get; set; }

        public Work()
        {

            Categories = new List<Categories>();

        }
        
    }
}
