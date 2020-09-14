import React from 'react';
import Maps from '../../components/maps/maps';
import SearchPlaces from '../../components/search-places/search-places';
import ListPlaces from '../../components/favorite-list/favorite-list';
import PlaceInfo from '../../components/place-info/place-info';
import scriptLoader from 'react-async-script-loader';
import PropTypes from 'prop-types';

import {
    Container,
    PageHeader,
    PageTitle,
    Loading,
} from '../../styles/default/default';
import { PageContent, PageContentBox } from './home-styles';
import { HomeProvider } from '../../contexts/home/home';

const HomeContexted = () => {
    return (
        <Container>
            <PageHeader>
                <div>
                    <PageTitle>Encontre lugares próximos a você</PageTitle>
                </div>
            </PageHeader>
            <PageContent>
                <PageContentBox>
                    <SearchPlaces />
                    <PlaceInfo />
                    <ListPlaces />
                </PageContentBox>
                <PageContentBox>
                    <Maps
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </PageContentBox>
            </PageContent>
        </Container>
    );
};

const Home = ({ isScriptLoaded, isScriptLoadSucceed }) => (
    <>
        {isScriptLoaded && isScriptLoadSucceed ? (
            <HomeProvider>
                <HomeContexted />
            </HomeProvider>
        ) : (
            <Loading />
        )}
    </>
);

Home.propTypes = {
    isScriptLoaded: PropTypes.bool,
    isScriptLoadSucceed: PropTypes.bool,
};

export default scriptLoader([
    `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}&libraries=places`,
])(Home);
