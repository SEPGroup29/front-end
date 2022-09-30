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

// eslint-disable-next-line
export default {
    emailExistance,
    adminLogin,
    registerUser,
    fsLogin
}


