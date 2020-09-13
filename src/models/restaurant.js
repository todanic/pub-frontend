export default class Restaurant {
  constructor(id, phone, address, restaurantName, description) {
    this.id = id;
    this.restaurantName = restaurantName;
    this.address = address;
    this.phone = phone;
		this.description = description;
  }
}
