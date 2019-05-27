using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.IO;
using System.Dynamic;
using MalariaAPI.Models;


namespace MalariaAPI.Controllers
{
    [RoutePrefix("api/Cause")]
    public class CauseController : ApiController
    {
        //READ
        [HttpGet]
        [Route("AllCauseDetails")]
        public List<dynamic> getAllCause()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            db.Configuration.ProxyCreationEnabled = false;
            return getCauseList(db.Causes.ToList());
        }

        private List<dynamic> getCauseList(List<Cause> forCause)
        {
            List<dynamic> dynamicCauses = new List<dynamic>();
            foreach (Cause cause in forCause)
            {
                dynamic dynamicCause = new ExpandoObject();
                dynamicCause.CauseID = cause.Cause_ID;
                dynamicCause.CauseName = cause.Cause_Name;
               
                dynamicCauses.Add(dynamicCause);
            }
            return dynamicCauses;
        }

        ////INSERT
        [HttpPost]
        [Route("InsertCause")] // resolved!!
        public List<dynamic> AddCause([FromBody] Cause causes)
        {
            if (causes != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Causes.Add(causes);
                db.SaveChanges();
                return getAllCause();
            }
            else
            {
                return null;
            }
        }

        ////UPDATE
        [HttpPut]
        [Route("UpdateCause")] // works now
        public List<dynamic> UpdateCause([FromBody] Cause causes)
        {
            if (causes != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Cause objCau = db.Causes.Where(p => p.Cause_ID == causes.Cause_ID).FirstOrDefault();
                objCau.Cause_Name = causes.Cause_Name;
                db.SaveChanges();
                return getAllCause();
            }
            else
            {
                return null;
            }

        }

        ////DELETE
        [HttpDelete]
        [Route("DeleteCause")]
        public List<dynamic> DeleteCause(Cause ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Cause objCau = db.Causes.Where(p => p.Cause_ID == ID.Cause_ID).FirstOrDefault();
            if (objCau != null)
            {
                db.Causes.Remove(objCau);
                db.SaveChanges();
                return getAllCause();
            }
            else
            {
                return null;
            }

        }
    }
}
