import * as Yup from 'yup';

export default {
    signUp: {
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validator: Yup.object({
            email: Yup.string()
                .email('Insira um email válido.')
                .required('O email é obrigatório.'),
            password: Yup.string()
                .required('A senha é obrigatória.')
                .min(6, 'Digite ao menos 6 caracteres'),
            confirmPassword: Yup.string()
                .required('Confirmar a senha é obrigatório.')
                .oneOf([Yup.ref('password')], 'As senhas não batem'),
        }),
    },
};
