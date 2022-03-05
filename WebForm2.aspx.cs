using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;
using System.Diagnostics;
using Newtonsoft.Json;

namespace Pizza_Shop
{
	public partial class WebForm2 : System.Web.UI.Page
	{
        
		protected void Page_Load(object sender, EventArgs e)
		{
			//Request cookies of userName and stores it in a string locally.
			string userName = Request.Cookies["userName"].Value;

			string[] split = userName.Split(' ');

			//Greets user by their name.
			greet.InnerHtml = "<p>Ciao " + split[0] + "!!</p>";
            
            totalPrice.InnerHtml = "<p>Total Cost: 10</p>";
            
		}



        /*
         * Function     : Button1_Click
         * Description  : It stores maximum and minimum guess number in cookies
         *				  and redirects to next page.
         * Parameters   : object      sender
         *				  EventArgs   e
         * Return       : NONE
         */
        protected void Button1_Click(object sender, EventArgs e)
        {

            if (Page.IsValid)
            {
                Response.Cookies["toppingNames"].Value = HiddenToppings.Value;
                Response.Cookies["totalPrice"].Value = hide.Value ;

                //Moves user to gameEngine.aspx page.
                Server.Transfer("/WebForm3.aspx");

            }

        }


        [WebMethod]
        public static string removeTopping(string OldValue, string NewValue)
        {

            var result = float.Parse(OldValue) - float.Parse(NewValue);
            string returnData;  // final JSON return value
            returnData = JsonConvert.SerializeObject(new { description = result });
            return returnData;
        }



        [WebMethod]
        public static string addTopping(string OldValue, string NewValue)
        {

            var abc = float.Parse(OldValue) + float.Parse(NewValue);
            string returnData;  // final JSON return value

            returnData = JsonConvert.SerializeObject(new { description = abc });
            return returnData;
        }

    }
}