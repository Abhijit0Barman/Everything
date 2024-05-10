function UserInfo(name, location) {
    this.name = name;
    this.location = location;
}

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`
}
function serveIn(name, location, food) {
    let user = new UserInfo(name, location);
    return serveFood.call(user, food);
}

function billNote(total) {
    return `${this.name}'s bill is INR ${total}`;
}

function generateInVoice(name, location, quantity, price) {
    let user = new UserInfo(name, location);
    let total = quantity * price;
    return billNote.call(user, total);
}


export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
