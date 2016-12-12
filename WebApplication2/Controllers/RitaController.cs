using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class RitaController : ApiController
    {
        // GET: api/Rita
        public IEnumerable<Rita> Get()
        {
            return new Rita[]
            {
                new Rita
                {
                    id = 1,
                    imagePath = "image1",
                    items = new Items[]
                    {
                        new Items { id = 1, name = "tomato", kkal = 220.0, checkk = false},
                        new Items { id = 2, name = "ogyrech", kkal = 21.0, checkk = false}
                    }
                },
                new Rita
                {
                    id = 2,
                    imagePath = "image2",
                    items = new Items[]
                    {
                        new Items { id = 1, name = "frykto", kkal = 15.0, checkk = true},
                        new Items { id = 2, name = "poncho", kkal = 43.5, checkk = false}
                    }
                }
            };
        }

        // GET: api/Rita/5
        public Items Get(int id)
        {
            return new Items { id = 1, name = "tomato", kkal = 220.0, checkk = false };
        }

        // POST: api/Rita
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Rita/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Rita/5
        public void Delete(int id)
        {
        }
    }
}
