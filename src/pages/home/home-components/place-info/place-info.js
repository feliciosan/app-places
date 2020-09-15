import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import StarRatings from 'react-star-ratings';

import { HomeContext } from '../../../../contexts/home/home';
import {
    Textarea,
    InputCheckbox,
    Button,
    FormAlert,
} from '../../../../styles/default/default';
import {
    PlaceInfoBox,
    PlaceInfoTitle,
    PlaceInfoStar,
    PlaceInfoActions,
    PlaceInfoFavorite,
} from './place-info-styles';

const PlaceInfo = () => {
    const {
        selectedPlace,
        favorites,
        setFavorites,
        ratingStore,
        setRatingStore,
    } = useContext(HomeContext);
    const [rating, setRating] = useState();
    const [comment, setComment] = useState();
    const [success, setSuccess] = useState(false);

    const handleChangeFavorite = () => {
        const favoritePlaces = { ...favorites };

        favoritePlaces[selectedPlace.placeId] = selectedPlace;
        setFavorites(favoritePlaces);

        localStorage.setItem('favorites', JSON.stringify(favoritePlaces));
    };

    const handleRating = () => {
        const newRatingStore = { ...ratingStore };
        const oldComments =
            (newRatingStore[selectedPlace.placeId] &&
                newRatingStore[selectedPlace.placeId].comments) ||
            [];

        newRatingStore[selectedPlace.placeId] = {
            rating,
            comments: oldComments,
        };

        if (comment) {
            newRatingStore[selectedPlace.placeId].comments.push(comment);
        }

        setRatingStore(newRatingStore);
        setComment('');
        setRating(5);
        setSuccess({
            message: 'Avaliação enviada.',
        });

        localStorage.setItem('ratingStore', JSON.stringify(newRatingStore));
    };

    useEffect(() => {
        setSuccess(false);
        setComment('');
        setRating(5);
    }, [selectedPlace]);

    return (
        <>
            {selectedPlace && (
                <PlaceInfoBox>
                    {success && <FormAlert>{success.message}</FormAlert>}
                    <PlaceInfoTitle>{selectedPlace.place}</PlaceInfoTitle>
                    <PlaceInfoStar>
                        <StarRatings
                            rating={rating}
                            changeRating={setRating}
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="2.5px"
                            starRatedColor="#f3d429"
                            starHoverColor="#f3d429"
                        />
                    </PlaceInfoStar>
                    <Textarea
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        rows="2"
                        placeholder="Deixe um comentário"
                    />
                    <PlaceInfoActions>
                        <PlaceInfoFavorite>
                            {favorites[selectedPlace.placeId] ? (
                                <span>Favoritado!</span>
                            ) : (
                                <>
                                    <InputCheckbox
                                        id="favorite"
                                        onChange={handleChangeFavorite}
                                    />
                                    <label htmlFor="favorite">
                                        Adicionar aos favoritos
                                    </label>
                                </>
                            )}
                        </PlaceInfoFavorite>
                        <Button onClick={handleRating} color="dark">
                            Avaliar
                        </Button>
                    </PlaceInfoActions>
                </PlaceInfoBox>
            )}
        </>
    );
};

export default PlaceInfo;
