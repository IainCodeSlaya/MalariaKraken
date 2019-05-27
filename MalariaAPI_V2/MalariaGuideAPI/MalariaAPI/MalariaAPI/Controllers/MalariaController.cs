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
using System.Data.Entity;

namespace MalariaAPI.Controllers
{
    [RoutePrefix("api/Malaria")] //URL thats followed when API is opened in the web
    public class MalariaController : ApiController
    {

        //Read all the malaria data in the database
        [HttpGet]
        [Route("AllMalariaDetails")]
        public List<dynamic> getAllMalaria()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getMalariaList(db.Malarias.Include(pp => pp.Malaria_Type).ToList());
            //return getMalariaList(db.Preventative_Measure.Include(pp => pp.Preventative_Measure_ID).ToList());
            //return getMalariaList(db.Quick_Fact.Include(pp => pp.Quick_Fact_ID).ToList());


        }
        //return getMalariaList(db.Malarias.Include(pp => pp.Malaria_Type).ToList());
        //To handle runtime error when trying to access the linked items
        //private List<dynamic> getMalariaList(List<Quick_Fact> list)
        //{
        //    throw new NotImplementedException();
        //}

        //private List<dynamic> getMalariaList(List<Preventative_Measure> list)
        //{
        //    throw new NotImplementedException();
        //}

        // Create a link between tables so that all the data that falls om both can be shown in the output
        private List<dynamic> getMalariaList(List<Malaria> forMalaria)
        {
            //A list of
            List<dynamic> dynamicMalarias = new List<dynamic>();
            foreach (Malaria malaria in forMalaria)
            {
                dynamic dynamicMalaria = new ExpandoObject();
                dynamicMalaria.Malaria_ID = malaria.Malaria_ID;
                dynamicMalaria.MalariaBG = malaria.Malaria_Background;

                //dynamic type = new ExpandoObject();
                //type.Malaria_ID = malaria.Malaria_Type_ID; //internal variable that sets malariaID from the database to that 
                //            //of the new "type" so that we can access all types and display them
                //dynamicMalaria.Malaria_Type_Name = type;

                //dynamic   dynamicMalariaPreventative_M = new ExpandoObject();
                //dynamicMalariaPreventative_M.Preventative_Measure = malaria.Preventative_Measure;
                //dynamicMalaria.Preventative_Measure = dynamicMalariaPreventative_M;

                //dynamic dynamicVaccine = new ExpandoObject();
                //dynamicVaccine.Vaccination_Name = malaria.Vaccination;
                //dynamicMalaria.Vaccination_Name = dynamicVaccine;

                //dynamic dynamicSymptom = new ExpandoObject();
                // Malaria dynamicSymptom = db.Malaria.Where(p => p.Malaria_ID == dynamicSymptom.Malaria_ID).FirstOrDefault();

                //dynamicSymptom.Symptom_ID = Malaria.ReferenceEquals(dynamicSymptom, dynamicMalaria);
                //dynamicMalaria.Symptom_Name = dynamicSymptom;

                //dynamic dynamicQuickFact = new ExpandoObject();
                //dynamicQuickFact.Fact = malaria.Quick_Fact;
                //dynamicMalaria.Fact = dynamicQuickFact;

                //dynamic dynamicCountries = new ExpandoObject();
                //dynamicCountries.Country_Name = malaria.Country;
                //dynamicMalaria.Country_Name = dynamicCountries;

                //dynamic dynamicCauses = new ExpandoObject();
                //dynamicCauses.Cause_Name = malaria.Cause;
               // //dynamicMalaria.Cause_Name = dynamicCauses;
   //This was supposed to work but it dont            // Malaria objMal = db.MalariaEntities1.Where(p => p.Malaria_ID == malaria.Malaria_ID).FirstOrDefault();
                dynamic dynamicInfectionCycle = new ExpandoObject();
                dynamicInfectionCycle.Cycle_Head = malaria.Infection_Cycle;
                dynamicMalaria.Cycle_Head = dynamicInfectionCycle;

                dynamicMalarias.Add(dynamicMalaria);
            }
            return dynamicMalarias;
        }

        //CREATE
        [HttpPost]
        [Route("CreateMalarias")]
        public List<dynamic> CreateMalarias([FromBody] List<Malaria> malarias)
        {
            if (malarias != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Malarias.AddRange(malarias);
                db.SaveChanges();
                return getAllMalaria();
            }
            else
            {
                return null;
            }
        }
        //CREATE a Malaria instance with all the linked tables to make a complete object
        [HttpPost]
        [Route ("CreateMalaria")]
        public List<dynamic> CreateMalaria([FromBody] Malaria malaria)
        {
            if(malaria != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Malarias.Add(malaria);
                db.SaveChanges();
                return getAllMalaria();
            }
            else
            {
                return null;
            }
        }

        //UPDATE Just the malaria background
        [HttpPut]
        [Route("UpdateMalaria")]
        public List<dynamic> UpdateMalaria([FromBody] Malaria malaria)
        {
            if (malaria != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Malaria objMal = db.Malarias.Where(p => p.Malaria_ID == malaria.Malaria_ID).FirstOrDefault();
                objMal.Malaria_Background = malaria.Malaria_Background;
                db.SaveChanges();
                return getAllMalaria();
            }
            else
            {
                return null;
            }

        }


        //DELETE just the malaria background
        [HttpDelete]
        [Route("DeleteMalaria")]
        public List<dynamic> DeleteMalaria(int ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Malaria objMal = db.Malarias.Where(p => p.Malaria_ID == ID).FirstOrDefault();
            if (objMal != null)
            {
                db.Malarias.Remove(objMal);
                db.SaveChanges();
                return getAllMalaria();
            }
            else
            {
                return null;
            }

        }
    }
}

