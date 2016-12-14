using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class ContactsController : ApiController
    {
        // GET: api/Contacts
        public List<Contact> Get()
        {
            if (Main.contacts.Count == 0)
            {
                Main.contacts.AddRange(new[] { new Contact() { index = 1, firstname = "Irina", lastname = "Tkachuk", tel = "+380501235742", email = "tkachuk@gmail.com"},
                new Contact() { index = 2, firstname = "Valerii", lastname = "Oderii", tel = "+380506825963", email = "oderii@gmail.com"},
                new Contact() { index = 3, firstname = "Artem", lastname = "Ysachov", tel = "+380501484267", email = "ysachov@gmail.com"}});
            }
            return Main.contacts;
        }

        // GET: api/Contacts/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Contacts
        public List<Contact> Post([FromBody]Contact obj)
        {
            bool edit = false;
            for (int i = 0; i < Main.contacts.Count; i++)
            {
                if (Main.contacts[i].index == obj.index && obj.index <= Main.contacts.Count)
                {
                    edit = true;
                    break;
                }
            }
            if (edit)
                Main.contacts[obj.index-1] = obj;
            else
                Main.contacts.Add(obj);
            Update_index();
            return Main.contacts;
        }

        // PUT: api/Contacts/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Contacts/5
        public List<Contact> Delete(int id)
        {
            for (int i = 0; i < Main.contacts.Count; i++)
            {
                if (Main.contacts[i].index == id)
                    Main.contacts.RemoveAt(i);
            }
            Update_index();
            return Main.contacts;
        }
        private void Update_index()
        {
            for (int i = 0; i < Main.contacts.Count; i++)
            {
                Main.contacts[i].index = i+1;
            }
        }
    }
}
