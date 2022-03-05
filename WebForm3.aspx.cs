using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pizza_Shop
{
	public partial class WebForm3 : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			//Request username by cookies and stores it in string.
			string userName = Request.Cookies["userName"].Value;
			string totalPrice = Request.Cookies["totalPrice"].Value;
			string[] split = userName.Split(' ');
			string toppings = Request.Cookies["toppingNames"].Value;
			if(toppings == "undefined")
            {
				toppings = "NONE";
            }
			greet.InnerHtml = "<p>Ciao " + split[0] + "!</p>";
				
			Div1.InnerHtml = "<p>You ordered the following toppings : " + toppings + " ! Your total price is $" + totalPrice + "</p>";
		}

		protected void Button1_Click(object sender, EventArgs e)
		{

			if (Page.IsValid)
			{

				//Moves user to gameEngine.aspx page.
				Server.Transfer("/WebForm4.aspx");

			}

		}

		protected void Button2_Click(object sender, EventArgs e)
		{

			if (Page.IsValid)
			{

				//Moves user to gameEngine.aspx page.
				Server.Transfer("/WebForm5.aspx");

			}

		}
	}
}