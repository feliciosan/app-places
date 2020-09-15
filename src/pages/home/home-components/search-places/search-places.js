import React, { useContext, useState, useEffect } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { HomeContext } from '../../../../contexts/home/home';
import { Input } from '../../../../styles/default/default';
import {
    SearchPlacesSuggest,
    SearchPlacesBox,
    SearchPlacesSuggestIitem,
} from './search-places-styles';

const SearchPlaces = () => {
    const { lat, lng, setLat, setLng, setSelectedPlace } = useContext(
        HomeContext
    );
    const [searchOptions, setSearchOptions] = useState({});
    const [address, setAddress] = useState('');

    const handleSelect = async (place, placeId) => {
        setAddress('');
        setSelectedPlace({
            place,
            placeId,
        });

        const data = await geocodeByAddress(place);

        if (data) {
            const location = await getLatLng(data[0]);

            setLat(location.lat);
            setLng(location.lng);
        }
    };

    useEffect(() => {
        setSearchOptions({
            location: new window.google.maps.LatLng(lat, lng),
            radius: 2000,
        });
    }, [lat, lng]);

    return (
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            searchOptions={searchOptions}
        >
            {({
                getInputProps,
                getSuggestionItemProps,
                suggestions,
                loading,
            }) => (
                <SearchPlacesBox>
                    <Input
                        {...getInputProps({
                            placeholder: 'Pesquise um lugar',
                            className: 'location-search-input',
                        })}
                    />
                    <SearchPlacesSuggest>
                        {loading && (
                            <SearchPlacesSuggestIitem>
                                Carregando...
                            </SearchPlacesSuggestIitem>
                        )}
                        {suggestions.map((suggestion) => {
                            return (
                                <SearchPlacesSuggestIitem
                                    {...getSuggestionItemProps(suggestion)}
                                    key={suggestion.placeId}
                                    active={suggestion.active}
                                >
                                    <span>{suggestion.description}</span>
                                </SearchPlacesSuggestIitem>
                            );
                        })}
                    </SearchPlacesSuggest>
                </SearchPlacesBox>
            )}
        </PlacesAutocomplete>
    );
};

export default SearchPlaces;
