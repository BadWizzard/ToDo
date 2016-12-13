using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class PasswordsController : ApiController
    {
        // GET: api/Passwords
        public List<Password> Get()
        {
            if (Main.passwords.Count == 0)
            {
                Main.passwords.AddRange(new[] { new Password() { index = 0, login = "tkachuk96", pass = "tkach96", site = "www.tkachuk.ua"},
                new Password() { index = 1, login = "1valerii1", pass = "val9609", site = "www.oderii.ua"},
                new Password() { index = 2, login = "ysach99", pass = "ysdopyza", site = "www.ysachow.ua"},});
            }
            return Main.passwords;
        }

        // GET: api/Passwords/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Passwords
        public List<Password> Post([FromBody]Password obj)
        {
            bool edit = false;
            for (int i = 0; i < Main.passwords.Count; i++)
            {
                if (Main.passwords[i].index == obj.index)
                {
                    edit = true;
                    break;
                }
            }
            if (edit)
                Main.passwords[obj.index] = obj;
            else
                Main.passwords.Add(obj);

            return Main.passwords;
        }

        // PUT: api/Passwords/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Password/5
        public List<Password> Delete(int id)
        {
            for (int i = 0; i < Main.passwords.Count; i++)
            {
                if (Main.passwords[i].index == id)
                    Main.passwords.RemoveAt(i);
            }
            return Main.passwords;
        }
    }
}
