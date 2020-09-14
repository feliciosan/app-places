import React, { useEffect, useState } from 'react';
import userService from '../../services/user';
import schema from './profile-schema-validator';

import {
    Container,
    PageHeader,
    PageTitle,
    InputText,
    FormAlert,
    Loading,
    FormTitle,
    FormGroup,
    Button,
} from '../../styles/default/default';
import { useFormik } from 'formik';
import { FormProfile } from './profile-styles';
import { FormInputError } from '../../components/input-form-error/input-form-error';

const Profile = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [initialValues, setInitialValues] = useState({
        name: '',
        job: '',
    });

    const formikProfile = useFormik({
        initialValues: initialValues,
        validationSchema: schema.profile.validator,
        validateOnMount: true,
        enableReinitialize: true,
        onSubmit: async (values) => {
            try {
                const { name, job } = values;

                setIsLoading(true);

                await userService.update(
                    { id: 2 },
                    {
                        name,
                        job,
                    }
                );

                setIsLoading(false);
                setSuccess({
                    message: 'Dados atualizados com sucesso.',
                });
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        },
    });

    useEffect(() => {
        let ummounted = false;

        (async () => {
            const { data } = await userService.getInfo({ id: 2 });

            if (!ummounted) {
                setInitialValues({
                    name: data.data.first_name,
                    job: 'Programador',
                });
                setUser(data.data);
                setIsLoading(false);
            }
        })();

        return () => (ummounted = true);
    }, []);

    return (
        <Container>
            <PageHeader>
                <div>
                    <PageTitle>Perfil</PageTitle>
                </div>
            </PageHeader>
            {isLoading && <Loading marginTop="50px" />}
            {initialValues && user && (
                <FormProfile onSubmit={formikProfile.handleSubmit}>
                    {error && (
                        <FormAlert type="danger">{error.message}</FormAlert>
                    )}
                    {success && <FormAlert>{success.message}</FormAlert>}
                    <FormTitle>Suas informações</FormTitle>
                    <FormGroup>
                        <strong>{user.email}</strong>
                    </FormGroup>
                    <FormGroup>
                        <InputText
                            name="name"
                            onChange={formikProfile.handleChange}
                            onBlur={formikProfile.handleBlur}
                            value={formikProfile.values.name}
                            placeholder="Nome"
                            disabled={isLoading}
                        />
                        <FormInputError
                            touched={formikProfile.touched.name}
                            error={formikProfile.errors.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputText
                            name="job"
                            onChange={formikProfile.handleChange}
                            onBlur={formikProfile.handleBlur}
                            value={formikProfile.values.job}
                            placeholder="Profissão"
                            disabled={isLoading}
                        />
                        <FormInputError
                            touched={formikProfile.touched.job}
                            error={formikProfile.errors.job}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button
                            type="submit"
                            color="dark"
                            disabled={!formikProfile.isValid || isLoading}
                        >
                            Atualizar
                        </Button>
                    </FormGroup>
                </FormProfile>
            )}
        </Container>
    );
};

export default Profile;
