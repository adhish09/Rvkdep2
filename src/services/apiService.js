import axios from 'axios';


const api = axios.create({
    baseURL: 'https://rvkapi.vtechsolution.xyz/' ,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

 api.interceptors.request.use(
    async (config) => {
      const token1 = localStorage.getItem("access_token");
      if (token1?.length > 0) {
        config.headers.Authorization = `Bearer ${token1}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api;




// http://16.170.209.177

// axios.defaults.baseURL = 'https://mossaddakrvk12.pythonanywhere.com/'

// if (user_token) axios.defaults.headers.common = {'Authorization': `Bearer ${user_token}`}

// export default axios;
