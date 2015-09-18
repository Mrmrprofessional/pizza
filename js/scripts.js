function PizzaOrder(quantinty, toppings, size) {
    this.quantinty = quantinty;
    this.toppings = toppings;
    this.size = size;
}

PizzaOrder.prototype.orderPrice = function () {

    return this.quantinty * ((this.toppings.length * .5) + this.size);
}

$(document).ready(function() {
    event.preventDefault();
    $("form#new-ticket").submit(function(event) {
        event.preventDefault();

        var inputTitle = parseInt($("select.new-movieTitle").val());
        var inputTime = parseInt($("select.new-movieTime").val());
        var inputAge = parseInt($("select.new-userAge").val());

        var newTicket = new Ticket(inputTitle, inputTime, inputAge);

        $("#price h2").text("Ticket Price: " + "$" + newTicket.ticketPrice() + ".00");
        console.log(newTicket.ticketPrice);

        $("#price").show();
    });

    $("option#meru").click(function(){
        $("#poster h2").text("what up");

        $("#poster").append('<img src="http://t0.gstatic.com/images?q=tbn:ANd9GcTUyhL5rNv0LOhoGEVHyqvHb_MQZxKLbi7jvPUV6gKz3g_aHPzj" />');
    });

    $("#poster").show();
});
