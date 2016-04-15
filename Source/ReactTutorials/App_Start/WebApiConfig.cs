using System;
using System.Web.Http;

namespace ReactTutorials
{
    static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
        }
    }
}