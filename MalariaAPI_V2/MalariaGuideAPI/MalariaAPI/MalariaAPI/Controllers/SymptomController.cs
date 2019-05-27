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
    [RoutePrefix("api/Symptom")]
    public class SymptomController : ApiController
    {
        //READ
        [HttpGet]
        [Route("AllSymptomDetails")]
        public List<dynamic> getAllSymptom()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getSymptomList(db.Symptoms.ToList());
        }

        private List<dynamic> getSymptomList(List<Symptom> forSymptom)
        {
            List<dynamic> dynamicSymptoms = new List<dynamic>();
            foreach (Symptom symptom in forSymptom)
            {
                dynamic dynamicSymptom = new ExpandoObject();
                dynamicSymptom.SymptomID = symptom.Symptom_ID;
                dynamicSymptom.SymptomName = symptom.Symptom_Name;
                dynamicSymptoms.Add(dynamicSymptom);
            }
            return dynamicSymptoms;
        }

        //INSERT
        [HttpPost]
        [Route("InsertSymptom")]
        public List<dynamic> AddSymptom([FromBody] Symptom symptom)
        {
            if (symptom != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Symptoms.Add(symptom);
                db.SaveChanges();
                return getAllSymptom();
            }
            else
            {
                return null;
            }
        }

        //UPDATE
        [HttpPut]
        [Route("UpdateSymptom")]
        public List<dynamic> UpdateSymptom([FromBody] Symptom symptom)
        {
            if (symptom != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Symptom objSym = db.Symptoms.Where(p => p.Symptom_ID == symptom.Symptom_ID).FirstOrDefault();
                objSym.Symptom_Name = symptom.Symptom_Name;
                db.SaveChanges();
                return getAllSymptom();
            }
            else
            {
                return null;
            }

        }

        //DELETE
        [HttpDelete]
        [Route("DeleteSymptom")]
        public List<dynamic> DeleteSymptom(Symptom ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Symptom objSym = db.Symptoms.Where(p => p.Symptom_ID == ID.Symptom_ID).FirstOrDefault();
            if (objSym != null)
            {
                db.Symptoms.Remove(objSym);
                db.SaveChanges();
                return getAllSymptom();
            }
            else
            {
                return null;
            }

        }
    }
}
