import React from 'react';

import '../../App.scss';
import styles from '../../mystyle.module.css';
import Nav from '../Nav/Nav';

const Header = (props) =>
{
    return (<div className={styles.headerStyle}>
        {props.title}{props.children}
        <Nav />


    </div>);
}
export default Header;