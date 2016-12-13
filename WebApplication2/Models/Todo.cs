using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Todo
    {
        public int id { get; set; }
        public string task { get; set; }
        public string importance { get; set; }
        public DateTime date { get; set; }
    }
}