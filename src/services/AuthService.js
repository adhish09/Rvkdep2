import axios from "./apiService";

class AuthService {
  setTokens(data) {
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
  }

  async login(email, password) {
    try {
      const response = await axios.post(`/api/login/`, {
        email,
        password,
      });
     
     await this.setTokens(response.data?.data?.token);

      return {
        status: 200,
        message: "user logged in successfully",
        data: response.data,
      };
    } catch (error) {
      const loginError = error.response.data.error;
      return {
        status: 400,
        error: loginError
          ? loginError
          : "There was an error processing your request please try again",
      };
    }
  }

  async sign_up(name, phone_number, email, password) {
    const data = new FormData();

    data.append("name", name);
    data.append("phone_number", phone_number);
    data.append("email", email);
    data.append("password", password);

    try {
      const response = await axios.post(`/api/accounts/`, data);

      if (response.status === 201) {
        return {
          status: 200,
          message: "user created successfully",
          data: response.data,
        };
      }
    } catch (e) {
      let error = "";

      if (e.status === 401) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
      }

      const data = e.response.data;
      if ("email" in data.errors) {
        error = data.errors["email"][0];
      } else if ("name" in data.errors) {
        error = data.errors["name"][0];
      } else {
        error = data.errors["password"][0];
      }
      return {
        status: 400,
        error: error
          ? error
          : "There was an error processing your request please try again",
      };
    }
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  async getCurrentUser() {
    const response = await axios.get(`/api/profile/`);
    
    return response?.data;
  }
}

export default new AuthService();
