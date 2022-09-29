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

const showVehicles = () => {
    return axios({
        method: 'get',
        url: API_URL + '/show-vehicles',
    })
}

const deleteVehicle = (vehicle_id) => {
    return axios({
        method: 'delete',
        url: API_URL + `/delete-vehicle/${vehicle_id}`,
    })
}

export default{
    registerVehicle,
    showVehicles,
    deleteVehicle,
}

