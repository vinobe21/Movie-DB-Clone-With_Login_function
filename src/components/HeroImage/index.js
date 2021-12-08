import React from 'react';
import { Content, Text, Wrapper } from './HeroImage.styles';

import PropTypes from 'prop-types'; //use to prop validation

const HeroImage = ({ image, title, text }) => {
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    )
}
//Check props validation
HeroImage.propTypes = { //note this propTypes p is a small letter
    image: PropTypes.string, //note this PropTypes P is a capital letter
    title: PropTypes.string,
    text: PropTypes.string
}
export default HeroImage
