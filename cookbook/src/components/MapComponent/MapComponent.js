import PropTypes from 'prop-types';
import * as React from "react";
class Map extends React.Component{
    static propTypes={
        lat: PropTypes.number,
        lng:PropTypes.number,
        zoom: PropTypes.number,
        place: PropTypes.object,
        markers:PropTypes.array,


    };
}

