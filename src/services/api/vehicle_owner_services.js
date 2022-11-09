import axios from "axios";
import config from '../../config.json';

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

const getVehicleOwnerName = () => {
    return axios({
        method: 'get',
        url: API_URL + '/get-vehicle-owner-name'
    })
}

const getVehicleTypes = () => {
    return axios({
        method: 'get',
        url: API_URL + '/get-vehicle-types'
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
        }
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

