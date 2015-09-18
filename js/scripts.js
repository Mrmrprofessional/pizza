function Ticket(movieTitle, movieTime, userAge) {
    this.movieTitle = movieTitle;
    this.movieTime = movieTime;
    this.userAge = userAge;
}

Ticket.prototype.ticketPrice = function () {
    return this.movieTitle + this.movieTime + this.userAge;
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
