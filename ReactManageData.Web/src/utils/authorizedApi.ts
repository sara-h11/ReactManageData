import { notification } from "antd";
import axios from "axios"
import { store } from "store/store";

export const authorizedApi = axios.create(
    {
        baseURL : process.env.REACT_APP_API
    }
);
authorizedApi.interceptors.request.use((config) => {
    const token = store.getState().authState.token;
    if(token && config.headers){
        config.headers['token'] = token;
    }
    return config;

});
authorizedApi.interceptors.response.use((response) =>  response, (error) =>
 {
        if (error.response && error.response.data){
            notification.error({
                message:error.response.data.error,
                description : "Network has no data!"})
        }else {
            notification.error({
                message:error.message,
                description : "Network is not connected!"
        })
    }
    
    return Promise.reject(error);
  });
