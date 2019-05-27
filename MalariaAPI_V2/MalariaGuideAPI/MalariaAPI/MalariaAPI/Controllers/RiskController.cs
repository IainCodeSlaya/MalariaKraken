using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Dynamic;
using MalariaAPI.Models;
using System.Data.Entity;

namespace MalariaAPI.Controllers
{
    [RoutePrefix("api/Risk")]
    public class RiskController : ApiController
    {
        //READ
        [HttpGet]
        [Route("AllRisk")]
        public List<dynamic> getAllRisks()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getRiskList(db.Risks.ToList());
        }

        private List<dynamic> getRiskList(List<Risk> forRisk)
        {
            List<dynamic> dynamicRisks = new List<dynamic>();
            foreach (Risk Risk1 in forRisk)
            {
                dynamic dynamicRisk = new ExpandoObject();
                dynamicRisk.Risk_ID = Risk1.Risk_ID;
                dynamicRisk.Risk1 = Risk1.Risk1;
            }
            return dynamicRisks;
        } //end of List

        //INSERT a new Risk into the database table Risks
        [HttpPost]
        [Route("InsertRisk")]
        public List<dynamic> AddRisk([FromBody] Risk risk)
        {
                if (risk != null)
                {
                    MalariaEntities1 db = new MalariaEntities1();
                    db.Configuration.ProxyCreationEnabled = false;
                        db.Risks.Add(risk);
                        db.SaveChanges();
                        return getAllRisks();
            }
            else
            {
                return null;
            }
        }

        //UPDATE
        [HttpPut]
        [Route("UpdateRisk")]
        public List<dynamic> UpdateRisks([FromBody] Risk risk)
        {
            if (risk != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Risk objRisk = db.Risks.Where(p => p.Risk_ID == risk.Risk_ID).FirstOrDefault();
                objRisk.Risk1 = risk.Risk1;
                db.SaveChanges();
                return getAllRisks();
            }
            else
            {
                return null;
            }

        }

        ////DELETE
        [HttpDelete]
        [Route("DeleteRisk")]
        public List<dynamic> DeleteRisk(Risk ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Risk objRisk = db.Risks.Where(p => p.Risk_ID == ID.Risk_ID).FirstOrDefault();
            if (objRisk != null)
            {
                db.Risks.Remove(objRisk);
                db.SaveChanges();
                return getAllRisks();
            }
            else
            {
                return null;
            }

        }
    }
}
