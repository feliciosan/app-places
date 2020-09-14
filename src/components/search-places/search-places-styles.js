import styled from 'styled-components';

export const SearchPlacesSuggest = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 5;
    border: 1px solid #eaeaea;
    box-shadow: 0px 0px 15px 0px rgba(156, 156, 156, 0.5);
    border-radius: 4px;
    overflow: hidden;
`;

export const SearchPlacesBox = styled.div`
    position: relative;
    z-index: 10;
`;

export const SearchPlacesSuggestIitem = styled.div`
    padding: 5px 20px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#fafafa' : 'white')};
`;
