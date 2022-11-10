import axois from 'axios';
import config from '../config';
import token from './token'

const API_URL = config.DOMAIN_NAME + '/auth';

const emailExistance = (email) => {
    return axois({
        method: 'post',
        url: API_URL + '/register-email-existance',
        data: {
            email: email
        }
    });
}

const adminLogin = async (email, password) => {
    const response = await axois({
        method: 'post',
        url: API_URL + '/login-admin',
        data: {
            email: email,
            password: password
        }
    });
    token.setAccessToken(response.data.access_token);
    return response
}

const fsLogin = async (email, password) => {
    const response = await axois({
        method: 'post',
        url: API_URL + '/fs-login',//backend route
        data: {
            email: email,
            password: password
        }
    });
    token.setAccessToken(response.data.access_token);
    return response
}



const registerUser = (NIC, email, otp, firstName, lastName) => {
    return axois({
        method: 'post',
        url: API_URL + '/register',
        data: {
            NIC: NIC,
            email: email,
            entered_otp: otp,
            firstName: firstName,
            lastName: lastName
        }
    })
}

const voLoginBeforeOtp = (email) => {
    return axois({
        method: 'post',
        url: API_URL + '/login-vehicle-owner',
        data: {
            email
        }
    })
}

const voLoginAfterOtp = async (email, entered_otp) => {
    const response = await axois({
        method: 'post',
        url: API_URL + '/login-otp',
        data: {
            email,
            entered_otp
        }
    })
    token.setAccessToken(response.data.access_token);
    return response
}

const registerPo = (email, firstName, lastName, contactNumber, password, fuelStationId) => {
    return axois({
        method: 'post',
        url: API_URL + '/register-po',
        data: {
            email,
            firstName,
            lastName,
            contactNumber,
            password,
            fuelStationId   
        }
    })
}

// eslint-disable-next-line
export default {
    emailExistance,
    adminLogin,
    registerUser,
    fsLogin,
    voLoginBeforeOtp,
    voLoginAfterOtp,
    registerPo,
}


