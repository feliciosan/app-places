import styled from 'styled-components';
import { Button, InputCheckbox } from '../../../../styles/default/default';

export const PlaceInfoBox = styled.div`
    padding: 20px;
    background: white;
    border-radius: 4px;
    margin-top: 20px;
`;

export const PlaceInfoTitle = styled.div`
    font-size: 16px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 5px;
    margin-bottom: 7.5px;
`;

export const PlaceInfoStar = styled.div`
    margin-bottom: 7.5px;
`;

export const PlaceInfoActions = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 10px;
    ${Button} {
        width: auto;
    }
`;

export const PlaceInfoFavorite = styled.div`
    display: flex;
    align-items: center;
    ${InputCheckbox} {
        margin-right: 10px;
    }
    label {
        position: relative;
        top: 2px;
        cursor: pointer;
    }
`;
