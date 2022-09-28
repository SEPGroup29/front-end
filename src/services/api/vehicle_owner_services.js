import axios from "axios";
import config from '../../config.json';

const API_URL = config.DOMAIN_NAME + '/api/vehicle-owner';

const registerVehicle = (regNo, chassisNo, vehicleType, fuelType ) => {
    return axios({
        method: 'post',
        url: API_URL + '/add-vehicle',
        data: {
            regNo: regNo,
            chassisNo: chassisNo,
            vehicleType: vehicleType,
            fuelType: fuelType
        }
    })
}

export default{
    registerVehicle
}

