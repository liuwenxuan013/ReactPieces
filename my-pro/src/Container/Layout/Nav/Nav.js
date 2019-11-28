
import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';


class Nav extends React.Component
{
    render()
    {
        return (
            <nav className="Nav">
                <ul>
                    {/* <li style={{ textAlign: 'left', marginRight: '70%' }}>
                        <Avatar src='https://www.rubberstampchamp.com/images/products/smmedprodimgs/clipart/clipart-920_medium.png'
                            sizes='small' />
                    </li> */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/arts">Arts</Link>
                    </li>
                    <li>
                        <Link to="/tools">Tools</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>



                </ul>
            </nav>)
    }
}
export default Nav;