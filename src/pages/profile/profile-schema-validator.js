import * as Yup from 'yup';

export default {
    profile: {
        validator: Yup.object({
            name: Yup.string().required('Nome é obrigatório.'),
            job: Yup.string().required('Profissão é obrigatório.'),
        }),
    },
};
