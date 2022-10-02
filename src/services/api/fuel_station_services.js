import axios from "axios";
import config from '../../config.json';

const API_URL = config.DOMAIN_NAME + '/api/fuel-station';

const showAllFuelStations = () => {
    return axios ({
        method: 'GET',
        url: API_URL + '/show-all-fuel-stations'
    })
}

export default {
    showAllFuelStations,
}