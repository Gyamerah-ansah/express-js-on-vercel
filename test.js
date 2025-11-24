import axios from "axios";

const fetch = axios.create({
    baseURL: "https://vite-react2-ashen.vercel.app",
    timeout: 10000,
    headers: {'Content-Type': 'application/json'},
})

//Add a request interceptor
fetch.interceptors.request.use(function (config) {
    //Do something before the request
    return config;
},function (error) {
    //Do something with request error
    return Promise.reject(error)
});


export default fetch