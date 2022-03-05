<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="Pizza_Shop.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <title>SET Pizza Shop</title>
	<link rel="stylesheet" type="text/css" href="texteditor.css"/>

   
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type = "text/javascript" src = "totalPrice.js"></script>
</head>
<body>

    <form id="form1" runat="server">

        <h1>SET Pizza Shop</h1>

        <div id="greet" runat="server" class="greet">
        </div>

        <p>In the SET Pizza store, you can only order <b>1 large pizza</b>. The awesome thing is, this pizza automatically comes with <u>sauce and cheese</u>!! </p>

    	<p>
           
			<input type="checkbox" id="pepperoni" value="pepperoni" runat="server" />
			<label for="Pepperoni">Pepperoni</label>
			<br />

			<input type="checkbox" id="mushrooms" value="mushrooms" runat="server" />
			<label for="Mushrooms">Mushrooms</label>
			<br />

			<input type="checkbox" id="greenolives" value="greenolives" runat="server" />
			<label for="greenolives">Green Olives</label>
			<br />

			<input type="checkbox" id="greenpeppers" value="greenpeppers" runat="server" />
			<label for="greenpeppers">Green Peppers</label>
			<br />

			<input type="checkbox" id="doublecheese" value="doublecheese" runat="server" />
			<label for="doublecheese">Double Cheese</label>
			<br />
       
		</p>
		
		<div id="totalPrice" runat="server" class="greet">
        </div>
		<input type="hidden" id="hide" runat="server" value="10" name="hide"/>
		<input type="hidden" id="HiddenToppings" runat="server" value="HiddenToppings" name="HiddenToppings"/>
		<br />
		<br />
		<asp:Button ID="Button1" runat="server" Text="Make It!" OnClick="Button1_Click" />

    </form>

</body>
</html>
