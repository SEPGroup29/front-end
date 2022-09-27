import axois from 'axios';
import config from '../config';

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
 
export default {
    emailExistance,
    adminLogin
}


