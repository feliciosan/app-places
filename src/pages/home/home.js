import React from 'react';
import Maps from '../../components/maps/maps';
import SearchPlaces from '../../components/search-places/search-places';
import ListPlaces from '../../components/favorite-list/favorite-list';
import PlaceInfo from '../../components/place-info/place-info';

import { Container, PageHeader, PageTitle } from '../../styles/default/default';
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
                    <Maps />
                </PageContentBox>
            </PageContent>
        </Container>
    );
};

const Home = () => (
    <HomeProvider>
        <HomeContexted />
    </HomeProvider>
);

export default Home;
