var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Bus;
}());
var myBus = new Bus("Volvo", "XC90", 2022);
console.log("Make:", myBus.make);
console.log("Model:", myBus.model);
console.log("Year:", myBus.year);
