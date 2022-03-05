<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm3.aspx.cs" Inherits="Pizza_Shop.WebForm3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <title>SET Pizza Shop</title>
	<link rel="stylesheet" type="text/css" href="texteditor.css"/>
    

</head>
<body>

    <form id="form1" runat="server">

        <h1>SET Pizza Shop</h1>

        <div id="greet" runat="server" class="greet"></div>

        <p>The order has been placed. Please review your order. The details are listed below: </p>
        <div id="Div1" runat="server" class="Div1"></div>
        
        <p>To continue with your order, confirm or cancel it as you please : )</p>
		<asp:Button ID="Button1" runat="server" Text="CONFIRM" OnClick="Button1_Click" />
        <p></p>
       <asp:Button ID="Button2" runat="server" Text="CANCEL" OnClick="Button2_Click" />

    </form>

</body>
</html>
