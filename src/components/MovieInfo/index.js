import React, { useContext } from 'react';

import Thumb from '../Thumb';
import Rate from '../Rate';
import { Context } from '../../context';
import API from '../../API';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import NoImage from '../../images/no_image.jpg';
import { Wrapper, Content, Text } from './MovieInfo.styles';



const MovieInfo = ({ movie }) => {
    const [user] = useContext(Context);
    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value);
        console.log(rate);
    }
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                    alt=''
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <div className="title_tags">
                        <span>Languages: </span>
                        {movie.spoken_languages.map(lang => (
                            <span key={lang.name}>{lang.name}</span>
                        ))}
                        <span>/ {movie.release_date} /</span>
                        <span>{movie.status} /</span>
                        {movie.genres.map(genres => (
                            <span key={genres.id}>{genres.name}</span>
                        ))}

                    </div>

                    <h3>Overview</h3>
                    <p>{movie.overview}</p>

                    <div className='rating-directors'>
                        <div>
                            <h3>Average Vote</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
                        <div>
                            <h3>Total Vote Count</h3>
                            <div className='score'>{movie.vote_count}</div>
                        </div>

                    </div>
                    {user && (
                        <div>
                            <p>Rate Movie</p>
                            <Rate callback={handleRating} />
                        </div>
                    )}
                    <div className='director'>
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>

                </Text>
            </Content>
        </Wrapper>
    );
};

export default MovieInfo;