import * as Yup from 'yup';

export default {
    signIn: {
        initialValues: {
            email: '',
            password: '',
        },
        validator: Yup.object({
            email: Yup.string()
                .email('Insira um email válido.')
                .required('O email é obrigatório.'),
            password: Yup.string()
                .required('A senha é obrigatória.')
                .min(6, 'Digite ao menos 6 caracteres'),
        }),
    },
};
