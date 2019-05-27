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
    [RoutePrefix("api/Cycle")]
    public class CycleController : ApiController
    {
        //READ
        [HttpGet]
        [Route("AllCycleDetails")]
        public List<dynamic> getAllCycle()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getCycleList(db.Infection_Cycle.ToList()); 
        }

        private List<dynamic> getCycleList(List<Infection_Cycle> forCycle)
        {
            List<dynamic> dynamicCycles = new List<dynamic>();
            foreach (Infection_Cycle infection_Cycle in forCycle)
            {
                dynamic dynamicCycle = new ExpandoObject();
                dynamicCycle.CycleID = infection_Cycle.Cycle_ID;
                dynamicCycle.CyclePhaseA = infection_Cycle.Cycle_Head;
                dynamicCycle.CycleDescA = infection_Cycle.Cycle_Description;
                dynamicCycles.Add(dynamicCycle);
            }
            return dynamicCycles;
        }


        //INSERT
        [HttpPost]
        [Route("InsertCycle")] //Insert ???
        public List<dynamic> AddCycle([FromBody] Infection_Cycle infection_cycle)
        {
            if (infection_cycle != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Infection_Cycle.Add(infection_cycle);
                db.SaveChanges();
                return getAllCycle();
            }
            else
            {
                return null;
            }
        }

        //UPDATE
        [HttpPut]
        [Route("UpdateCycle")]
        public List<dynamic> UpdateCycle([FromBody] Infection_Cycle infection_Cycle)
        {
            if (infection_Cycle != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Infection_Cycle objCyc = db.Infection_Cycle.Where(p => p.Cycle_ID == infection_Cycle.Cycle_ID).FirstOrDefault();
                objCyc.Cycle_Head = infection_Cycle.Cycle_Head;
                objCyc.Cycle_Description = infection_Cycle.Cycle_Description;
                db.SaveChanges();
                return getAllCycle();
            }
            else
            {
                return null;
            }

        }

       
        //DELETE
        [HttpDelete]
        [Route("DeleteCycle")]
        public List<dynamic> DeleteCycle(Infection_Cycle ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Infection_Cycle objCyc = db.Infection_Cycle.Where(p => p.Cycle_ID == ID.Cycle_ID).FirstOrDefault();
            if (objCyc != null)
            {
                db.Infection_Cycle.Remove(objCyc);
                db.SaveChanges();
                return getAllCycle();
            }
            else
            {
                return null;
            }

        }
    }
}
