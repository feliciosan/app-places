import api from '../api/api';

const getInfo = ({ id }) => {
    return api.get(`users/${id}`);
};

const update = ({ id }) => {
    return api.put(`users/${id}`);
};

export default {
    getInfo,
    update,
};
