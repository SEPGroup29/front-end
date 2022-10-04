import axois from 'axios';
import config from '../config';

const API_URL = config.DOMAIN_NAME + '/auth';

const emailExistance = (email) => {
    console.log(email);
    return axois({
        method: 'post',
        url: API_URL + '/register-email-existance',
        data: {
            email: email
        }
    });
}

const adminLogin = (email, password) => {
    return axois({
        method: 'post',
        url: API_URL + '/login-admin',
        data: {
            email: email,
            password: password
        }
    });
}

const fsLogin = (email, password) => {
    return axois({
        method: 'post',
        url: API_URL + '/login-manager',//backend route
        data: {
            email: email,
            password: password
        }
    });
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

const voLoginAfterOtp = (email, entered_otp) => {
    return axois({
        method: 'post',
        url: API_URL + '/login-otp',
        data: {
            email,
            entered_otp
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
}


