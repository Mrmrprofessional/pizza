describe('PizzaOrder', function() {
    it("creates an instance of the PizzaOrder object with the correct information", function() {
        var testOrder = new PizzaOrder(5, ["pepperoin", "mushrooms", "olives"], "l");
        expect(testOrder.quantinty).to.equal(5);
        expect(testOrder.toppings).to.eql(["pepperoin", "mushrooms", "olives"]);
        expect(testOrder.size).to.equal("l");
    });

    it("calculates the price of a pizza order", function() {
        var testOrder = new PizzaOrder(5, ["pepperoin", "mushrooms", "olives"], "l");
        expect(testOrder.orderPrice()).to.equal(9);
    })
});
