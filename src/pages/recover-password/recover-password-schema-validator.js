import * as Yup from 'yup';

export default {
    recoverPassword: {
        initialValues: {
            email: '',
        },
        validator: Yup.object({
            email: Yup.string()
                .email('Insira um email válido.')
                .required('O email é obrigatório.'),
        }),
    },
};
