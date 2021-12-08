import React, { useState } from 'react';

import PropTypes from 'prop-types'; //use to prop validation

const Rate = ({ callback }) => {
    const [value, setValue] = useState(5);

    return (
        <div>
            <input
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
            />
            {value}
            <p>
                <button className="rate_button" onClick={() => callback(value)}>Rate</button>
            </p>
        </div>
    )
}

//Check props validation
Rate.propTypes = { //note this propTypes p is a small letter
    callback: PropTypes.func //note this PropTypes P is a capital letter
}

export default Rate
