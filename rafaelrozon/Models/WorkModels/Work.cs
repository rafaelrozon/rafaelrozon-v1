using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rafaelrozon.Models.WorkModels
{
    public class Work
    {
        public Work() { }

        public int ID { get; set; }

        public String  Title { get; set; }

        public String Description { get; set; }

        public int Status { get; set; }

        public String Client { get; set; }

        public DateTime Date { get; set; }

        public List<Image> Images { get; set; }

        public List<Categories> Categories { get; set; }

    }
}
