// global variable - for use in jQuery (AJAX) calls
var jQueryXMLHttpRequest;
var currentPrice;
var newPrice;
var pepperoniAdded;
var mushroomsAdded;
var greenolivesAdded;
var greenpeppersAdded;
var doublecheeseAdded;

//jquery activate only when ready
//does the intial call to get the file list on document ready
$(document).ready(function () {
    $("#pepperoni").change(addPepp);
    $("#mushrooms").change(addMush);
    $("#greenolives").change(addOli);
    $("#greenpeppers").change(addGreen);
    $("#doublecheese").change(addCheese);
    $("#Button1").click(submit);
});



function addPepp() {

    if (pepperoniAdded == "true") {
        newPrice = 1.50;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);

        pepperoniAdded = "false";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/removeTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }
    else {
        newPrice = 1.50;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);
        pepperoniAdded = "true";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/addTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }

}



function addMush() {

    if (mushroomsAdded == "true") {
        newPrice = 1.00;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);

        mushroomsAdded = "false";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/removeTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }
    else {
        newPrice = 1.00;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);
        mushroomsAdded = "true";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/addTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }
}


function addOli() {


    if (greenolivesAdded == "true") {
        newPrice = 1.00;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);

        greenolivesAdded = "false";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/removeTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }
    else {
        newPrice = 1.00;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);
        greenolivesAdded = "true";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/addTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }

}


function addGreen() {

    if (greenpeppersAdded == "true") {
        newPrice = 1.00;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);

        greenpeppersAdded = "false";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/removeTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });

        
    }
    else {
        newPrice = 1.00;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);
        greenpeppersAdded = "true";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/addTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }
}




function addCheese() {

    if (doublecheeseAdded == "true") {
        newPrice = 2.25;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);

        doublecheeseAdded = "false";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/removeTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    document.getElementById("hide").value = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
    }
    else {
        newPrice = 2.25;
        currentPrice = document.getElementById("hide").value;
        var jsonData = { OldValue: currentPrice, NewValue: newPrice };
        var jsonString = JSON.stringify(jsonData);
        doublecheeseAdded = "true";

        jQueryXMLHttpRequest = $.ajax({
            type: "POST",
            url: "WebForm2.aspx/addTopping",
            data: jsonString,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null && data.d != null) {
                    var response;
                    response = $.parseJSON(data.d);
                    document.getElementById("totalPrice").innerHTML = "<p>Total Cost: " + response.description + "</p>";
                    
                    
                    document.getElementById("hide").value = response.description;
                    //currentPrice = response.description;
                }
            },
            fail: function () {
                document.getElementById("totalPrice").innerHTML = "The call to the WebMethod failed!";
            }
        });
        
    }
}


function submit() {
    var toppings;
    if (pepperoniAdded == "true") {
        toppings = "Pepperoni,";
    }
    if (mushroomsAdded == "true") {
        toppings = toppings + " Mushrooms,";
    }
    if (greenolivesAdded == "true") {
        toppings = toppings + " Green Olives,";
    }
    if (greenpeppersAdded == "true") {
        toppings = toppings + " Green Peppers,";
    }
    if (doublecheeseAdded == "true") {
        toppings = toppings + " Double Cheese";
    }

    document.getElementById("HiddenToppings").value = toppings;
}