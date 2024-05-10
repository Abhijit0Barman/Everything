// 1. UserInfo constructor
function UserInfo(name, location) {
    this.name = name;
    this.location = location;
}

// 2. serveFood function
function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`;
}

// 3. bind serveFood with UserInfo object
UserInfo.prototype.serveFood = serveFood;

// 4. serveIn function
function serveIn(name, location, food) {
    var userInfo = new UserInfo(name, location);
    return serveFood.call(userInfo, food);
}

// 5. billNote function
function billNote(total) {
    return `${this.name}'s bill is INR ${total}`;
}

// 6. bind billNote with UserInfo object
UserInfo.prototype.billNote = billNote;

// 7. generateInvoice function
function generateInvoice(name, location, quantity, price) {
    var userInfo = new UserInfo(name, location);
    var total = quantity * price;
    return billNote.apply(userInfo, [total]);
}


export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
