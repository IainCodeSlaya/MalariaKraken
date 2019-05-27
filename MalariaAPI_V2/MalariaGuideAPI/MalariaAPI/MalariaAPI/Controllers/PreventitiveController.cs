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
    [RoutePrefix("api/Preventitive")]
    public class PreventitiveController : ApiController
    {
        //READ
        [HttpGet]
        [Route("GetAllPreventitives")] //Tested and it works
        public List<dynamic> getAllPreventitive()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getPreventitiveList(db.Preventative_Measure.ToList());
        }

        private List<dynamic> getPreventitiveList(List<Preventative_Measure> forPrevent)
        {
            List<dynamic> dynamicPrevents = new List<dynamic>();
            foreach (Preventative_Measure preventative_Measure in forPrevent)
            {
                dynamic dynamicPrevent = new ExpandoObject();
                dynamicPrevent.Preventative_Measure_ID = preventative_Measure.Preventative_Measure_ID;
                dynamicPrevent.Measure_Description = preventative_Measure.Measure_Description;

                dynamicPrevents.Add(dynamicPrevent);
            }
            return dynamicPrevents;
        }

        //INSERT
        [HttpPost]
        [Route("InsertPreventitive")] //Insert Works
        public List<dynamic> AddPreventitive([FromBody] Preventative_Measure preventative_Measure)
        {
            if (preventative_Measure != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Preventative_Measure.Add(preventative_Measure);
                db.SaveChanges();
                return getAllPreventitive();
            }
            else
            {
                return null;
            }
        }

        //UPDATE
        [HttpPut]
        [Route("UpdatePreventive")] // Update works!
        public List<dynamic> UpdatePreventitive([FromBody] Preventative_Measure preventative_Measure)
        {
            if (preventative_Measure != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Preventative_Measure objPrev = db.Preventative_Measure.Where(p => p.Preventative_Measure_ID == preventative_Measure.Preventative_Measure_ID).FirstOrDefault();
                objPrev.Measure_Description = preventative_Measure.Measure_Description;
                db.SaveChanges();
                return getAllPreventitive();
            }
            else
            {
                return null;
            }

        }

        //DELETE
        [HttpDelete]
        [Route("DeleteMeasure")] //Works now
        public List<dynamic> DeleteMeasure(Preventative_Measure ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Preventative_Measure objPrev = db.Preventative_Measure.Where(p => p.Preventative_Measure_ID == ID.Preventative_Measure_ID).FirstOrDefault();
            if (objPrev != null)
            {
                db.Preventative_Measure.Remove(objPrev);
                db.SaveChanges();
                return getAllPreventitive();
            }
            else
            {
                return null;
            }

        }
    }
}
