import styled from 'styled-components';
import { Button } from '../../styles/default/default';

export const FavoriteListBox = styled.ul`
    padding: 20px;
    background-color: white;
    border-radius: 4px;
    margin-top: 20px;
`;

export const FavoriteListItem = styled.li`
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    background-color: #f7f7f7;
`;

export const FavoriteListTitle = styled.div`
    display: flex;
    justify-content: space-between;
    ${Button} {
        width: auto;
        height: 22px;
        padding: 0;
        min-width: 22px;
        margin-left: 15px;
        background-color: #da5a5a;
        font-size: 14px;
    }
`;

export const FavoriteListComment = styled.p`
    padding: 7.5px 0 0 10px;
`;

export const FavoriteListRating = styled.div`
    border-top: 1px solid #eaeaea;
    margin-top: 7.5px;
    padding-top: 7.5px;
`;

export const NoResults = styled.div`
    text-align: center;
    padding: 10px;
    border-radius: 4px;
    margin-top: 20px;
    background-color: #f7f7f7;
`;
