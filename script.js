/*jshint esversion: 6 */
function proceedButton() {

    var pizzaSize = document.getElementById('size').value;
    var pizzaCrust = document.getElementById('crust').value;
    var pizzaNeeded = document.getElementById('number').value;
    var pizzaToppings = document.getElementById ('toppings').value;



    var pizzaPrice;
    if (pizzaCrust === "Cheese-Stuffed" || pizzaCrust === "Thin-Crust" || pizzaCrust === "Neapolitan" || pizzaCrust === "Chicago-Deep-Dish") {
        if (pizzaSize == "normal-pizza") {
            pizzaPrice = 500;
        } else if (pizzaSize == "medium-pizza") {
            pizzaPrice = 800;
        } else if (pizzaSize == "large-pizza") {
            pizzaPrice = 1400;

        }

    }



    var toppingPrice;
    if (pizzaToppings === "topping-normal"){
        toppingPrice = 150;
    }
    else if (pizzaToppings === "topping-medium"){
        toppingPrice = 250;
    }
    else if (pizzaToppings === "topping-large"){
        toppingPrice = 350;
    }

    var crustPrice;
    if (pizzaCrust === "Cheese-Stuffed"){
        crustPrice = 120;
    }
    else if (pizzaCrust === "Thin-Crust"){
        crustPrice = 150;
    }
    else if (pizzaCrust === "Neapolitan"){
        crustPrice = 200;
    }
    else if (pizzaCrust === "Chicago-Deep-Dish"){
        crustPrice = 250;
    }


    var total = (pizzaPrice+crustPrice+toppingPrice);

    var totalPrice = parseInt (total * pizzaNeeded);
    
    $(document).ready(function(){
    $(".print").text(pizzaNeeded);
    $(".print1").text(pizzaSize);
    $(".print2").text(pizzaToppings);
    $(".print3").text(pizzaCrust);
    $(".print4").text(totalPrice);
});

}

$(document).ready(function(){
    $ ("#proceed").click(function(){
        $("#orders").hide();
        $ (".response").show();
    });
    $ ("#checkout").click(function(){
        $(".response").hide();
        $ (".pay").show();
    });
    $ ("#deli1").click(function(){
        $(".pay").hide();
        $ (".location").show();
    });



    $ ("#deli2").click(function(){
        $(".pay").hide();
        $ (".pickup").show();
    });


});



function checkoutButton (){
    var location = document.getElementById("info1").value;
    var phone = document.getElementById("info2").value;



    $(document).ready(function(){
    $(".check1").text(location);
    $(".check2").text(phone);

    $(".checkout").show()

    });

    }

