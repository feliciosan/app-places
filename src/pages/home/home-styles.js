import styled from 'styled-components';
import { Loading } from '../../styles/default/default';

export const PageHeaderForm = styled.form`
    display: flex;
    width: 330px;
    input {
        flex: 2.5;
    }
    button {
        flex: 0.5;
        margin-left: 15px;
    }

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 5px;
    }
`;

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
        flex-direction: column;
    }
`;

export const PageContentBox = styled.div`
    flex: 1;
    padding: 15px;
`;
