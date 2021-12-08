import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles';

import PropTypes from 'prop-types'; //use to prop validation

const Thumb = ({ image, movieId, clickable }) => {
    return (
        <div>
            {
                clickable ? (
                    <Link to={`/${movieId}`} >
                        <Image src={image} alt="" />
                    </Link>
                ) : (
                    <Image src={image} alt="" />
                )
            }

        </div>
    );
};

//Check props validation
Thumb.propTypes = { //note this propTypes p is a small letter
    image: PropTypes.string, //note this PropTypes P is a capital letter
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb
