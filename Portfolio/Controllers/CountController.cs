using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class CountController : Controller
    {
        // GET: Count
        public ActionResult Index()
        {
            return View();
        }
    }
}