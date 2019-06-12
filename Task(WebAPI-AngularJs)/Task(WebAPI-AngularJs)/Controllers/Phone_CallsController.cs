using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Task_WebAPI_AngularJs_.Models;

namespace Task_WebAPI_AngularJs_.Controllers
{
    public class Phone_CallsController : ApiController
    {
        private TaskEntities db = new TaskEntities();

        // GET: Task/Phone_Calls
        public IQueryable<Phone_Calls> GetPhone_Calls()
        {
            return db.Phone_Calls;
        }

        // GET: Task/Phone_Calls/5
        [ResponseType(typeof(Phone_Calls))]
        public async Task<IHttpActionResult> GetPhone_Calls(int id)
        {
            List<Phone_Calls> phone_Calls = await db.Phone_Calls.Where(x => x.Customer_ID == id).ToListAsync();
            if (phone_Calls == null)
            {
                return NotFound();
            }

            return Ok(phone_Calls);
        }

        // PUT: Task/Phone_Calls/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPhone_Calls(int id, Phone_Calls phone_Calls)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != phone_Calls.Phone_Call_ID)
            {
                return BadRequest();
            }

            db.Entry(phone_Calls).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Phone_CallsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: Task/Phone_Calls
        [ResponseType(typeof(Phone_Calls))]
        public async Task<IHttpActionResult> PostPhone_Calls(Phone_Calls phone_Calls)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Phone_Calls.Add(phone_Calls);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Phone_CallsExists(phone_Calls.Phone_Call_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = phone_Calls.Phone_Call_ID }, phone_Calls);
        }

        // DELETE: Task/Phone_Calls/5
        [ResponseType(typeof(Phone_Calls))]
        public async Task<IHttpActionResult> DeletePhone_Calls(int id)
        {
            Phone_Calls phone_Calls = await db.Phone_Calls.FindAsync(id);
            if (phone_Calls == null)
            {
                return NotFound();
            }

            db.Phone_Calls.Remove(phone_Calls);
            await db.SaveChangesAsync();

            return Ok(phone_Calls);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Phone_CallsExists(int id)
        {
            return db.Phone_Calls.Count(e => e.Phone_Call_ID == id) > 0;
        }
    }
}