import axios from "../../services/http_services"
import config from '../../config.json';
import token from "../token"

const API_URL = config.DOMAIN_NAME + '/api/vehicle-owner';

const registerVehicle = (regNo, chassisNo, vehicleType, fuelType) => {
    return axios({
        method: 'post',
        url: API_URL + '/add-vehicle',
        data: {
            regNo: regNo,
            chassisNo: chassisNo,
            vehicleType: vehicleType,
            fuelType: fuelType
        },
        headers: { Authorization: `Bearer ${token.getAccessToken()}` }
        
    })
}

const showVehicles = () => {
    return axios({
        method: 'get',
        url: API_URL + '/show-vehicles',
        headers: { Authorization: `Bearer ${token.getAccessToken()}` }
    })
}

const deleteVehicle = (vehicle_id) => {
    return axios({
        method: 'delete',
        url: API_URL + `/delete-vehicle/${vehicle_id}`,
        headers: { Authorization: `Bearer ${token.getAccessToken()}` }
    })
}

const getVehicleOwnerName = () => {
    return axios({
        method: 'get',
        url: API_URL + '/get-vehicle-owner-name',
        headers: { Authorization: `Bearer ${token.getAccessToken()}` },
    })
}

const getVehicleTypes = () => {
    return axios({
        method: 'get',
        url: API_URL + '/get-vehicle-types',
        headers: { Authorization: `Bearer ${token.getAccessToken()}` }
    })
}

const joinQueue = (stationId, fuel, vehicle, amount) => {
    return axios({
        method: 'post',
        url: API_URL + '/join-queue',
        data: {
            stationId,
            fuel,
            regNo: vehicle,
            amount
        },
        headers: { Authorization: `Bearer ${token.getAccessToken()}` }
    })
}

export default {
    registerVehicle,
    showVehicles,
    deleteVehicle,
    getVehicleOwnerName,
    getVehicleTypes,
    joinQueue,
}

