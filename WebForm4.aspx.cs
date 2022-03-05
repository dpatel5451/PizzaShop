using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pizza_Shop
{
	public partial class WebForm4 : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			Div1.InnerHtml = "<p>You have confirmed the order successfully!</p>";
			//Request username by cookies and stores it in string.
			string userName = Request.Cookies["userName"].Value;

			greet.InnerHtml = "<p>Thanks " + userName + "!</p>";
		}
	}
}
