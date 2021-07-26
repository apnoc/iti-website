
import axios from "axios";

axios.interceptors.request.use(
 async config => {

 console.log(config);
 return config;
 
 },
 error => Promise.reject(error)
);

// common response interceptor for services
axios.interceptors.response.use((response) => {
 console.log(
 `%c response---> ${response.config.url}`,
 'color: #0086b3; font-weight: bold',
 );
 console.log(response);
 
 return response
})

export default {
 get: axios.get,
 post: axios.post,
 put: axios.put,
 delete: axios.delete,
 create: axios.create,
};