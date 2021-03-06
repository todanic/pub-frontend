import http from "../http-common";

class AuthDataService {
  login(data) {
    return http.post("/login", data);
  }

  register(data) {
    return http.post("/register", data);
  }

  registerRestaurant(data) {
    return http.post("/register-restaurant", data);
  }

  getRestaurant(userId) {
    return http.get(`/profile-restaurant/${userId}`);
  }

  getRestaurantById(id) {
    return http.get(`/restaurant-profile/${id}`);
  }

  getRestaurantImage(id) {
    return http.post(`/image/`, id);
  }

  update(id, userData) {
    return http.put(`/update/${id}`, userData);
  }

  updateRestaurant(data) {
    return http.put("/update-restaurant/", data);
  }

  updateRestaurantPhoto(formData) {
    return http.post(`/update-restaurant-photo/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }

  profile(id) {
    return http.get(`/profile/${id}`);
  }

  getRestaurants() {
    return http.get("/restaurants");
  }

  contact(data) {
    return http.post("/contact", data);
  }
}

export default new AuthDataService();