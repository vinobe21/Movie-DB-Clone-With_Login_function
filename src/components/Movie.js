import React from 'react';
import { useParams } from 'react-router-dom';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';

import { useMovieFetch } from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg';
import Actor from './Actor';


const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    //console.log(movie);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Top Billed Cast">
                {
                    movie.actors.map(actor => (
                        <Actor
                            key={actor.credit_id}
                            name={actor.name}
                            character={actor.character}
                            dept={actor.known_for_department}
                            imageUrl={
                                actor.profile_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                    : NoImage
                            }
                        />
                    ))
                }
            </Grid>
        </>
    );
};

export default Movie;