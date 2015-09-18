describe('PizzaOrder', function() {
    it("creates an instance of the PizzaOrder object with the correct information", function() {
        var testOrder = new PizzaOrder(5, ["pepperoin", "mushrooms", "olives"], "l");
        expect(testOrder.quantinty).to.equal(5);
        expect(testOrder.toppings).to.eql(["pepperoin", "mushrooms", "olives"]);
        expect(testOrder.size).to.equal("l");
    });

    it("calculates a movie price based on user selection", function() {
        var testTicket = new Ticket(2,3,4);
        expect(testTicket.ticketPrice()).to.equal(9);
    })
});
