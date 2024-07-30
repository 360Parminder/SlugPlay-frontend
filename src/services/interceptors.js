import Path from "./Path";

Path.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('userToken')
        if (token) {
            config.headers['Authorization']=`Bearer ${token}`;
        }
        return config
    },
    (error)=>{
        return Promise.reject(error);
    }
)