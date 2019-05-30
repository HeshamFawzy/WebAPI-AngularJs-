using System.Web;
using System.Web.Mvc;

namespace Task_WebAPI_AngularJs_
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
