
class Order {
    constructor(title, imageUri, address, location) {
        this.id = new Date().toString() + Math.random().toString();
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
    }
}