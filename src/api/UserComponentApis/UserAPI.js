import api from "../../apiConfig";

class UserAPI {
  static async getUserDetails(){
    try{
      const response = await api('GET', 'user/get_user_details/', {});
      return Promise.resolve({
        success: true,
        response,
        isLogout: false,
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        error,
        isLogout: error.response && error.response.status === 401,
      });
    }
  }

  static async getUserList() {
    try {
      const response = await api('GET', 'user/get_users/', {});
      return Promise.resolve({
        success: true,
        response,
        isLogout: false,
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        error,
        isLogout: error.response && error.response.status === 401,
      });
    }
  }

  static async addNewUser(username, email, tempPassword, roleId) {
    try {
      const response = await api('POST', 'user/add_new_user/', {
        "username": username,
        "email": email,
        "temp_password": tempPassword,
        "role": roleId,
      });
      return Promise.resolve({
        success: true,
        response,
        isLogout: false,
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        error,
        isLogout: error.response && error.response.status === 401,
      });
    }
  }

  static async modifyUserStatus(userId, deleteFlag) {
    try {
      const response = await api('POST', 'user/modify_user_status/', {
        "user_id": userId,
        "delete_user": deleteFlag,
      });
      return Promise.resolve({
        success: true,
        response,
        isLogout: false,
      });
    } catch (error) {
      return Promise.reject({
        success: false,
        error,
        isLogout: error.response && error.response.status === 401,
      });
    }
  }
}

export default UserAPI;
