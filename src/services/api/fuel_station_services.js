import axios from "axios";
import config from '../../config.json';

const API_URL = config.DOMAIN_NAME + '/api/fuel-station';

const showAllFuelStations = () => {
    return axios ({
        method: 'GET',
        url: API_URL + '/show-all-fuel-stations'
    })
}

const getStock = (fs_id) => {
    return axios ({
        method: 'GET',
        url: API_URL + `/get-stock/${fs_id}`
    })
}

const updateStock = (fuel, amount, fuelStationId) => {
    return axios({
        method: 'post',
        url: API_URL + '/update-stock',
        data: {
            fuel,
            amount,
            fuelStationId   
        }
    })
}

export default {
    showAllFuelStations,
    getStock,
    updateStock,
}