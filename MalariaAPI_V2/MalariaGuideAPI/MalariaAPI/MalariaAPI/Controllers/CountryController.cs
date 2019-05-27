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
    [RoutePrefix("api/Country")]
    public class CountryController : ApiController
    {
        //READ
        [HttpGet]
        [Route("AllCountryDetails")]
        public List<dynamic> getAllCountry()
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            return getCountryList(db.Countries.ToList());
           
        }

        private List<dynamic> getCountryList(List<Country> forCountry)
        {
            List<dynamic> dynamicCountrys = new List<dynamic>();
            foreach (Country country in forCountry)
            {
                dynamic dynamicCountry = new ExpandoObject();
                dynamicCountry.CountryID = country.Country_ID;
                dynamicCountry.CountryName = country.Country_Name;

                //dynamic risk = new ExpandoObject();
                //risk.Risk = country.Risk.Risk1;
                //dynamicCountry.Risk = risk;
                dynamicCountrys.Add(dynamicCountry);
            }
            return dynamicCountrys;
        }

        //INSERT
        [HttpPost]
        [Route("InsertCountry")]
        public List<dynamic> AddCountry([FromBody] Country country)
        {
            if (country != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                db.Countries.Add(country);
                db.SaveChanges();
                return getAllCountry();
            }
            else
            {
                return null;
            }
        }

        //UPDATE
        [HttpPut]
        [Route("UpdateCountry")]
        public List<dynamic> UpdateCountry([FromBody] Country country)
        {
            if (country != null)
            {
                MalariaEntities1 db = new MalariaEntities1();
                db.Configuration.ProxyCreationEnabled = false;
                Country objCou = db.Countries.Where(p => p.Country_ID == country.Country_ID).FirstOrDefault();
                objCou.Country_Name = country.Country_Name;
                db.SaveChanges();
                return getAllCountry();
            }
            else
            {
                return null;
            }

        }

        //DELETE
        [HttpDelete]
        [Route("DeleteCountry")]
        public List<dynamic> DeleteCountry(Country ID)
        {
            MalariaEntities1 db = new MalariaEntities1();
            db.Configuration.ProxyCreationEnabled = false;
            Country objCou = db.Countries.Where(p => p.Country_ID == ID.Country_ID).FirstOrDefault();
            if (objCou != null)
            {
                db.Countries.Remove(objCou);
                db.SaveChanges();
                return getAllCountry();
            }
            else
            {
                return null;
            }

        }
    }
}
