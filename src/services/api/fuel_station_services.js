import axios from "axios";
import config from '../../config.json';

const API_URL = config.DOMAIN_NAME + '/api/fuel-station';

const showAllFuelStations = (search) => {
    return axios ({
        method: 'GET',
        url: API_URL + `/show-all-fuel-stations/${search}`
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

const fsRegister = (name, nearCity, ownerName, mnFirstName, mnLastName, mnEmail, contactNumber) => {
    //console.log(ownerName, nearTown, name, firstName, lastName, email, contactNo)
    return axios({
        method: 'post',
        url: API_URL + '/register-fuel-station',
        data: {
            name,
            nearCity,
            ownerName,
            mnFirstName,
            mnLastName,
            contactNumber,
            mnEmail
        }
    })
}

export default {
    showAllFuelStations,
    getStock,
    updateStock,
    fsRegister
}