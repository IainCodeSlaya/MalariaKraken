using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Dynamic;
using MalariaAPI.Models;

namespace MalariaAPI.Controllers
{
    [RoutePrefix("api/MalariaType")]
    public class MalariaTypeController : ApiController
    {
        //READ
        [HttpGet]
        [Route("AllMalariaTypeDetails")]
        public List<dynamic> getAllMalariaType()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getMalariaTypeList(db.Malaria_Type.ToList());
        }

        private List<dynamic> getMalariaTypeList(List<Malaria_Type> forMalariaType)
        {
            List<dynamic> dynamicMalariaTypes = new List<dynamic>();
            foreach (Malaria_Type malaria_Type in forMalariaType)
            {
                dynamic dynamicMalariaType = new ExpandoObject();
                dynamicMalariaType.Malaria_Type_ID = malaria_Type.Malaria_Type_ID;
                dynamicMalariaType.MalariaTypeName = malaria_Type.Malaria_Type1;
                dynamicMalariaType.TypeDesc = malaria_Type.Malaria_Type_Description;
                dynamicMalariaTypes.Add(dynamicMalariaType);
            }
            return dynamicMalariaTypes;
        }

        //INSERT
        [HttpPost]
        [Route("InsertMalariaType")]
        public List<dynamic> AddMalariaType([FromBody] Malaria_Type malaria_Type)
        {
            if (malaria_Type != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Malaria_Type.Add(malaria_Type);
                db.SaveChanges();
                return getAllMalariaType();
            }
            else
            {
                return null;
            }
        }

        //UPDATE
        [HttpPut]
        [Route("UpdateMalariaType")]
        public List<dynamic> UpdateMalariaType([FromBody] Malaria_Type malaria_Type)
        {
            if (malaria_Type != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Malaria_Type objMal = db.Malaria_Type.Where(p => p.Malaria_Type_ID == malaria_Type.Malaria_Type_ID).FirstOrDefault();
                objMal.Malaria_Type1 = malaria_Type.Malaria_Type1;
                objMal.Malaria_Type_Description = malaria_Type.Malaria_Type_Description;
                db.SaveChanges();
                return getAllMalariaType();
            }
            else
            {
                return null;
            }

        }

        //DELETE
        [HttpDelete]
        [Route("DeleteMalariaType")]
        public List<dynamic> DeleteMalariaType(Malaria_Type ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Malaria_Type objMal = db.Malaria_Type.Where(p => p.Malaria_Type_ID == ID.Malaria_Type_ID).FirstOrDefault();
            if (objMal != null)
            {
                db.Malaria_Type.Remove(objMal);
                db.SaveChanges();
                return getAllMalariaType();
            }
            else
            {
                return null;
            }

        }
    }
}
