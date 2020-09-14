import api from '../api/api';

const signIn = ({ email, password }) => {
    return api.post('login', {
        email,
        password,
    });
};

const signUp = ({ email, password }) => {
    return api.post('register', {
        email,
        password,
    });
};

const recoverPassword = ({ email }) => {
    return Promise.resolve(email);
};

export default {
    signIn,
    signUp,
    recoverPassword,
};
