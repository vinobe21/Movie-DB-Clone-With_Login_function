import React from 'react'
import { Content, Wrapper } from './MovieInfoBar.styles';

import { calcTime, convertMoney } from '../../helpers';/// use helpers file 

import PropTypes from 'prop-types'; //use to prop validation

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

//Check props validation
MovieInfoBar.propTypes = { //note this propTypes p is a small letter
    time: PropTypes.number, //note this PropTypes P is a capital letter
    budget: PropTypes.number,
    revenue: PropTypes.number
}


export default MovieInfoBar
