import React, { useContext } from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { HomeContext } from '../../contexts/home/home';

const Maps = withGoogleMap(() => {
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
