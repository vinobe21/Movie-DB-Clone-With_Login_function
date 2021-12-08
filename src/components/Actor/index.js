import React from 'react'
import { Image, Wrapper } from './Actor.styles'

import PropTypes from 'prop-types'; //use to prop validation

const Actor = ({ name, character, dept, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl} alt="" />
        <h3>{name}</h3>
        <p>{character}</p>
        <p>{dept}</p>
    </Wrapper>
);

//Check props validation
Actor.propTypes = { //note this propTypes p is a small letter
    name: PropTypes.string, //note this PropTypes P is a capital letter
    character: PropTypes.string,
    dept: PropTypes.string,
    imageUrl: PropTypes.string
}
export default Actor
