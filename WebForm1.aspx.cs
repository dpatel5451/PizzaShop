using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pizza_Shop
{
	public partial class WebForm1 : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{

		}

		/*
         * Function     : Button1_Click
         * Description  : It stores username in cookies and redirects to next page.
         * Parameters   : object      sender
         *				  EventArgs   e
         * Return       : NONE
         */
		protected void Button1_Click(object sender, EventArgs e)
		{

			if (Page.IsValid)
			{

				//Stores userName in cookies.
				Response.Cookies["userName"].Value = userName.Text;

				//Moves user to maxGuess.aspx page.
				Server.Transfer("/WebForm2.aspx");

			}

		}
	}
}