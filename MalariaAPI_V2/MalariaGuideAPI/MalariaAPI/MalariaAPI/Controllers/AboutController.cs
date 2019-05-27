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
    [RoutePrefix("api/About")]
    public class AboutController : ApiController
    {
        //READ
        [HttpGet]
        [Route("AllAboutDetails")]
        public List<dynamic> getAllAbout()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getAboutList(db.Malarias.ToList());
        }

        private List<dynamic> getAboutList(List<Malaria> forAbout)
        {
            List<dynamic> dynamicAbouts = new List<dynamic>();
            foreach (Malaria malaria in forAbout)
            {
                dynamic dynamicAbout = new ExpandoObject();
                dynamicAbout.AboutID = malaria.Malaria_ID;
                dynamicAbout.Background = malaria.Malaria_Background;
                dynamicAbouts.Add(dynamicAbout);
            }
            return dynamicAbouts;
        }


        /*public IQueryable<Malaria> getAllAbout()
        {
            MalariaEntitiesZ db = new MalariaEntitiesZ();
            try
            {
                db.Configuration.ProxyCreationEnabled = false;
                return db.Malarias;
            }
            catch(Exception)
            {
                throw;
            }
        }*/

        [HttpPut]
        [Route("UpdateAbout")]
        public List<dynamic> UpdateAbout([FromBody] Malaria malaria)
        {
            //Malaria objMal = new Malaria();
           // objMal = db.Malarias.Find(malaria.Malaria_ID == 1);
           // 
            if (malaria != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Malaria objMal = db.Malarias.Where(p => p.Malaria_ID == 1).FirstOrDefault();
                objMal.Malaria_Background = malaria.Malaria_Background;
                db.SaveChanges();
            }
            return getAllAbout();
        }
        

           

            //UPDATE        
            // [System.Web.Mvc.Route("api/About/UpdateAbout")]
       /* [HttpPut]
        [Route("UpdateAbout")]
       // public IHttpActionResult PutAbout()
        public bool UpdateAbout(string bg)
        {
            bool status;
            try
            {
                Malaria mal = db.Malarias.Where(p => p.Malaria_ID == 1).FirstOrDefault();
                if (mal != null)
                {
                    mal.Malaria_Background = bg;
                    db.SaveChanges();
                }
                status = true;
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }*/
    }
}
