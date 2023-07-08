class Hamburger {
    static SIZE_SMALL = {
    price: 50,
    calories: 20,
    };

    static SIZE_LARGE = {
    price: 100,
    calories: 40,
    };

    static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
    };

    static STUFFING_SALAD = {
    price: 20,
    calories: 5,
    };

    static STUFFING_POTATOES = {
    price: 15,
    calories: 10,
    };

    static TOPPING_MAYO = {
    price: 20,
    calories: 5,
    };

    static TOPPING_SEASONING = {
    price: 15,
    calories: 0,
    };

    constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
    }

    addTopping(topping) {
    this.toppings.push(topping);
    }

    calculatePrice() {
    const totalPrice = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
    return totalPrice + toppingsPrice;
    }

    calculateCalories() {
    const totalCalories = this.size.calories + this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
    return totalCalories + toppingsCalories;
    }
}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SEASONING);

console.log("Price with sauce: " + hamburger.calculatePrice());