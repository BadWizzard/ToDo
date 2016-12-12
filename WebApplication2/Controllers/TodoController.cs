using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class TodoController : ApiController
    {
        // GET: api/Todo
        public IEnumerable<Todo> Get()
        {
            return new Todo[]
            {
                new Todo {id = 0, task = "1task", importance = 1, date = new DateTime(2016,4,4) },
                new Todo {id = 1, task = "2task", importance = 3, date = new DateTime(2016,10,8) },
                new Todo {id = 2, task = "3task", importance = 2, date = new DateTime(2016,6,5) }
            };
        }

        // GET: api/Todo/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Todo
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Todo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Todo/5
        public void Delete(int id)
        {
        }
    }
}
