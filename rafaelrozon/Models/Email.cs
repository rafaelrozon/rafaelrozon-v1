using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rafaelrozon.Models
{



    public class Email
    {

        public int ID { get; set; }

        [Required(ErrorMessage = "Enter your name")]
        [StringLength(30, ErrorMessage = "Maximum of 30 characters")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Enter your email")]
        public string From { get; set; }


        public string To { get; set; }
        public string Subject { get; set; }


        [Required(ErrorMessage = "Please, your message")]
        [StringLength(400, ErrorMessage = "The message must be between {2} and {1} characters.", MinimumLength = 20)]
        public string Body { get; set; }

    }
}
