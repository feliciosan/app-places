import React, { useContext, useState } from 'react';
import schema from './sign-in-schema-validator';
import authService from '../../services/auth';

import { useFormik } from 'formik';
import { AuthContext } from '../../contexts/auth/auth';
import { Redirect, Link } from 'react-router-dom';
import {
    Button,
    SmallText,
    FormSignInUp,
    FormTitle,
    FormGroup,
    FormAlert,
    Container,
    Loading,
    InputPassword,
    InputEmail,
} from '../../styles/default/default';
import { FormInputError } from '../../components/input-form-error/input-form-error';

const SignIn = () => {
    const { isAuthenticated, handleSignIn } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const formikSignIn = useFormik({
        initialValues: schema.signIn.initialValues,
        validationSchema: schema.signIn.validator,
        validateOnMount: true,
        onSubmit: async (values) => {
            try {
                const { email, password } = values;

                setIsLoading(true);

                const { token } = await authService.signIn({
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
            <FormSignInUp onSubmit={formikSignIn.handleSubmit}>
                {error && <FormAlert type="danger">{error.message}</FormAlert>}
                {isLoading ? <Loading /> : <FormTitle>Entrar</FormTitle>}

                <FormGroup>
                    <InputEmail
                        name="email"
                        onChange={formikSignIn.handleChange}
                        onBlur={formikSignIn.handleBlur}
                        value={formikSignIn.values.email}
                        placeholder="Your e-mail"
                        disabled={isLoading}
                    />
                    <FormInputError
                        touched={formikSignIn.touched.email}
                        error={formikSignIn.errors.email}
                    />
                </FormGroup>
                <FormGroup>
                    <InputPassword
                        name="password"
                        onChange={formikSignIn.handleChange}
                        onBlur={formikSignIn.handleBlur}
                        value={formikSignIn.values.password}
                        placeholder="Password"
                        disabled={isLoading}
                    />
                    <FormInputError
                        touched={formikSignIn.touched.password}
                        error={formikSignIn.errors.password}
                    />
                </FormGroup>
                <FormGroup>
                    <Link to="/recover-password">
                        <SmallText>Esqueceu a senha?</SmallText>
                    </Link>
                </FormGroup>
                <FormGroup>
                    <Button
                        type="submit"
                        color="dark"
                        disabled={!formikSignIn.isValid || isLoading}
                    >
                        Entrar
                    </Button>
                </FormGroup>
                <Link to="/signup">
                    <Button type="button" color="red">
                        Cadastrar-se
                    </Button>
                </Link>
            </FormSignInUp>
        </Container>
    );
};

export default SignIn;
