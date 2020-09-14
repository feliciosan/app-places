import React, { useContext } from 'react';

import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { HomeContext } from '../../contexts/home/home';

const Maps = compose(
    withProps({
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withGoogleMap
)(() => {
    const { lat, lng } = useContext(HomeContext);

    return (
        <>
            {lat && lng && (
                <GoogleMap defaultZoom={16} center={{ lat, lng }}>
                    <Marker position={{ lat, lng }} />
                </GoogleMap>
            )}
        </>
    );
});

export default Maps;
