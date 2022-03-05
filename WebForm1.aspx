<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Pizza_Shop.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title>SET Pizza Shop</title>
	<link rel="stylesheet" type="text/css" href="texteditor.css"/>

</head>
<body>

    <form id="form1" runat="server">

		<h1>SET Pizza Shop</h1>

        <div id="greet" runat="server"></div>

        
            
        <p>Enter your Name :</p>

    	<p>
			<asp:TextBox ID="userName" runat="server"  />
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Submit" />
		</p>

    	<p>
			<asp:RegularExpressionValidator id="RegularExpressionValidator1" 
                     ControlToValidate="userName"
                     ValidationExpression="^[A-Za-z ]+$"
                     Display="Static"
                     ForeColor="Red"
                     ErrorMessage="Your Name must be made of <b>Alpha</b> characters <u>only</u> and can contain <u>spaces</u>."
                     EnableClientScript="False" runat="server"/>
            <asp:RequiredFieldValidator ForeColor="Red" runat="server" ControlToValidate="userName">Your Name <b>cannot</b> be BLANK.</asp:RequiredFieldValidator>
        </p>

    </form>

</body>
</html>
