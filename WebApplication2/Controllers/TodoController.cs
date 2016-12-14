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
        public List<Todo> Get()
        {
            if (Main.todos.Count == 0)
            {
                Main.todos.AddRange(new[]{ new Todo { id = 0, task = "Поспать", importance = "Очень важно", date = new DateTime(2016, 4, 4) },
                new Todo { id = 1, task = "Сделать лабы", importance = "Не важно", date = new DateTime(2016, 10, 8) },
                new Todo { id = 2, task = "Покушать", importance = "Важно", date = new DateTime(2016, 6, 5) }});
            }
            return Main.todos;
        }

        // GET: api/Todo/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Todo
        public List<Todo> Post([FromBody]Todo obj)
        {
            bool edit = false;
            for (int i = 0; i < Main.todos.Count; i++)
            {
                if (Main.todos[i].id == obj.id && obj.id <= Main.todos.Count)
                {
                    edit = true;
                    break;
                }
            }
            if(edit)
                Main.todos[obj.id] = obj;
            else
                Main.todos.Add(obj);
            Update_id();
            return Main.todos;
        }

        // PUT: api/Todo/5
        public void Put(int id)
        {
        }

        // DELETE: api/Todo/5
        public List<Todo> Delete(int id)
        {
            for (int i = 0; i < Main.todos.Count; i++)
            {
                if (Main.todos[i].id == id)
                    Main.todos.RemoveAt(i);
            }
            Update_id();
            return Main.todos;
        }
        private void Update_id()
        {
            for (int i = 0; i < Main.todos.Count; i++)
            {
                Main.todos[i].id = i;
            }
        }
    }
}
