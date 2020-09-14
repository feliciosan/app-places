import styled from 'styled-components';
import { Loading } from '../../styles/default/default';

export const PageContent = styled.div`
    padding: 15px;
    background: #f7f7f7;
    border-radius: 4px;
    margin-top: 15px;
    display: flex;
    ${Loading} {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    @media (max-width: 600px) {
        padding: 7.5px;
    }
`;

export const PageContentBox = styled.div`
    flex: 1;
    padding: 15px;
`;

export const FormProfile = styled.form`
    background: #f9f9f9;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    padding: 40px;
    padding: 40px;
    border-radius: 4px;
    ${Loading} {
        margin-bottom: 30px;
    }

    @media (max-width: 600px) {
        padding: 20px;
        margin-top: 25px;
    }
`;
