import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const defaultCoords = {
    lat: -8.0648287,
    lng: -34.8738834,
};

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
    const [isHomeLoading, setIsHomeLoading] = useState(true);
    const [selectedPlace, setSelectedPlace] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    // Simulates a service by placeId
    const [favorites, setFavorites] = useState(
        (localStorage.getItem('favorites') &&
            JSON.parse(localStorage.getItem('favorites'))) ||
            {}
    );
    const [ratingStore, setRatingStore] = useState(
        (localStorage.getItem('ratingStore') &&
            JSON.parse(localStorage.getItem('ratingStore'))) ||
            {}
    );

    useEffect(() => {
        let ummounted = false;

        if (!navigator.geolocation) {
            setLat(defaultCoords.lat);
            setLng(defaultCoords.lng);
            setIsHomeLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (!ummounted) {
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                    setIsHomeLoading(false);
                }
            },
            () => {
                if (!ummounted) {
                    setLat(defaultCoords.lat);
                    setLng(defaultCoords.lng);
                    setIsHomeLoading(false);
                }
            }
        );

        return () => (ummounted = true);
    }, []);

    return (
        <HomeContext.Provider
            value={{
                isHomeLoading,
                lat,
                lng,
                favorites,
                selectedPlace,
                ratingStore,
                setLat,
                setLng,
                setFavorites,
                setSelectedPlace,
                setRatingStore,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};

HomeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { HomeContext, HomeProvider };
