import { useNavigate, Navigate } from "react-router";
import { AXIOS } from "../services";

const SafePath = ({ children }) => {

    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    AXIOS.defaults.headers.common.Authorization = `Bearer ${token}`;
    AXIOS.defaults.headers.common['Content-Type'] = 'application/json';
    AXIOS.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        if (error.response.status === 401) {
            sessionStorage.removeItem("token");
            navigate("/");
        }
        return Promise.reject(error);
    });

    AXIOS.interceptors.response.use(function (config) {
        return config;
    }, function (error) {
        if (error.response.status === 401) {
            sessionStorage.removeItem("token");
            navigate("/");
        }
        return Promise.reject(error);
    });

    return token ? (children) : <Navigate to={'/'} />;
}

export default SafePath;