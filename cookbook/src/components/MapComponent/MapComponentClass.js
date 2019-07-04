import PropTypes from 'prop-types';
import React from 'react';
const Map=React.createClass({
    propTypes:{
        lat:PropTypes.number,
        lng:PropTypes.number,
        zoom:PropTypes.number,
        place:PropTypes.object,
        marker:PropTypes.array,
    },
});
