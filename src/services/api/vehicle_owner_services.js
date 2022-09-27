import axios from "axios";
import config from '../../config.json';

const API_URL = config.DOMAIN_NAME + '/api/vehicle-owner';

const showVehicles = () => {
    return axios({
        method: 'get',
        url: API_URL + '/show-vehicles',
    });
}

export default {
    showVehicles,
}