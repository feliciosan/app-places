import React, { useContext } from 'react';
import StarRatings from 'react-star-ratings';

import { HomeContext } from '../../../../contexts/home/home';
import { Button } from '../../../../styles/default/default';
import {
    FavoriteListBox,
    FavoriteListItem,
    FavoriteListTitle,
    FavoriteListComment,
    FavoriteListRating,
    NoResults,
} from './favorite-list-styles';

const FavoriteList = () => {
    const { favorites, setFavorites, ratingStore } = useContext(HomeContext);

    const removeFavorite = (placeId) => {
        const currentFavorites = { ...favorites };

        delete currentFavorites[placeId];
        setFavorites(currentFavorites);
        localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    };

    return (
        <FavoriteListBox>
            <h3>Lugares favoritos</h3>
            {Object.values(favorites).length ? (
                <ul>
                    {Object.values(favorites).map((item) => (
                        <FavoriteListItem key={item.placeId}>
                            <FavoriteListTitle>
                                <p>{item.place}</p>
                                <Button
                                    onClick={() => removeFavorite(item.placeId)}
                                >
                                    X
                                </Button>
                            </FavoriteListTitle>
                            <ul>
                                {ratingStore[item.placeId] && (
                                    <FavoriteListRating>
                                        <div>
                                            {}
                                            <StarRatings
                                                rating={
                                                    ratingStore[item.placeId]
                                                        .rating
                                                }
                                                numberOfStars={5}
                                                starDimension="25px"
                                                starSpacing="2.5px"
                                                starRatedColor="#f3d429"
                                                starHoverColor="#f3d429"
                                            />
                                        </div>
                                        <strong>Comentários</strong>
                                        <ul>
                                            {ratingStore[
                                                item.placeId
                                            ].comments.map((comment, index) => (
                                                <FavoriteListComment
                                                    key={index}
                                                >
                                                    {comment}
                                                </FavoriteListComment>
                                            ))}
                                        </ul>
                                    </FavoriteListRating>
                                )}
                            </ul>
                        </FavoriteListItem>
                    ))}
                </ul>
            ) : (
                <NoResults>Sem favoritos</NoResults>
            )}
        </FavoriteListBox>
    );
};

export default FavoriteList;
