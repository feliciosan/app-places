import React, { useContext, useState } from 'react';
import schema from './sign-up-schema-validator';
import authService from '../../services/auth';

import { useFormik } from 'formik';
import { Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth/auth';
import {
    Button,
    FormSignInUp,
    FormTitle,
    FormGroup,
    FormAlert,
    Container,
    Loading,
    InputEmail,
    InputPassword,
} from '../../styles/default/default';
import { FormInputError } from '../../components/input-form-error/input-form-error';

const SignUp = () => {
    const { isAuthenticated, handleSignIn } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const formikSignUp = useFormik({
        initialValues: schema.signUp.initialValues,
        validationSchema: schema.signUp.validator,
        validateOnMount: true,
        onSubmit: async (values) => {
            try {
                const { email, password } = values;

                setIsLoading(true);

                const { token } = await authService.signUp({
                    email,
                    password,
                });

                handleSignIn(token);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        },
    });

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            <FormSignInUp onSubmit={formikSignUp.handleSubmit}>
                {error && <FormAlert type="danger">{error.message}</FormAlert>}
                {isLoading ? <Loading /> : <FormTitle>Cadastre-se</FormTitle>}

                <FormGroup>
                    <InputEmail
                        name="email"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.email}
                        placeholder="E-mail"
                        disabled={isLoading}
                    />
                    <FormInputError
                        touched={formikSignUp.touched.email}
                        error={formikSignUp.errors.email}
                    />
                </FormGroup>
                <FormGroup>
                    <InputPassword
                        name="password"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.password}
                        placeholder="Senha"
                        disabled={isLoading}
                    />
                    <FormInputError
                        touched={formikSignUp.touched.password}
                        error={formikSignUp.errors.password}
                    />
                </FormGroup>
                <FormGroup>
                    <InputPassword
                        name="confirmPassword"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.confirmPassword}
                        placeholder="Confirme sua senha"
                        disabled={isLoading}
                    />
                    <FormInputError
                        touched={formikSignUp.touched.confirmPassword}
                        error={formikSignUp.errors.confirmPassword}
                    />
                </FormGroup>
                <FormGroup>
                    <Button
                        type="submit"
                        color="dark"
                        disabled={!formikSignUp.isValid || isLoading}
                    >
                        Cadastrar
                    </Button>
                </FormGroup>
                <Link to="/signin">
                    <Button type="button" color="red">
                        Entrar
                    </Button>
                </Link>
            </FormSignInUp>
        </Container>
    );
};

export default SignUp;
