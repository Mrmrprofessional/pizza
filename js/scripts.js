function PizzaOrder(quantinty, toppings, size) {
    this.quantinty = quantinty;
    this.toppings = toppings;
    this.size = size;
}

PizzaOrder.prototype.orderPrice = function () {

    return this.quantinty * ((this.toppings.length) + this.size);
}

$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputQuantity = parseInt($("input#quantity").val());
        console.log($("input#quantity").val());
        var inputToppings = [];
        if($("input#pepperoni").is(':checked')){
            inputToppings.push($("input#pepperoni").val());
        }
        if($("input#garlic").is(':checked')){
            inputToppings.push($("input#garlic").val());
        }
        if($("input#mushrooms").is(':checked')){
            inputToppings.push($("input#mushrooms").val());
        }
        if($("input#olives").is(':checked')){
            inputToppings.push($("input#olives").val());
        }
        var inputSize = parseInt($("select#size").val());
        var newOrder = new PizzaOrder(inputQuantity, inputToppings, inputSize);

        $("#price h2").text("Order Price: " + "$" + newOrder.orderPrice() + ".00");

        $("#price").show();
    });

});
