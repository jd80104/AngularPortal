<%@ WebHandler Language="C#" Class="LoginService" %>

using System;
using System.Web;

public class LoginService : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        context.Response.Write("Hello World");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

    public bool UserLogin(string uid, string pwd)
    {
        bool isValid = false;

        return isValid;
    }
}