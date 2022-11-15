import axios from "../../services/http_services"
import config from '../../config.json';
import token from "../token"

const API_URL = config.DOMAIN_NAME + '/api/admin';

const showDashboard = async () => {
    return axios({
        method: 'GET',
        url: API_URL + '/dashboard-details',
        headers: { Authorization: `Bearer ${token.getAccessToken()}` }
    })
}

const getVehicleOwnersList = async (search) => {
    return axios({
        method: 'GET',
        url: API_URL + `/show-all-vehicle-owners/${search}`,
        headers: { Authorization: `Bearer ${token.getAccessToken()}` }
    })
}

export default {
    showDashboard,
    getVehicleOwnersList
}