import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request) => {
  request.headers["Content-Type"] = "application/json"
  request.headers["Authorization"] = "Bearer token_for_endpoint_1";
  return request;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);
 
export const _post = (url , payload)=>{
return axiosInstance.post(url,payload).then((response)=>{
  return response;
})
}

export const _get = (url)=>{
    return axiosInstance.get(url).then((response)=>{
        return response;
    })
}

 