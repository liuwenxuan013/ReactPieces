import React from 'react';
import './Layout.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Clock from '../../Components/Clock/Clock';
import Main from './Main/Main';

class Layout extends React.Component
{
    render()
    {
        return (
            <div className='Layout'>
                <header>
                    <Nav />
                </header>
                <section className='Main'>
                    <Main />
                </section>
                <Clock className='Layout' />
                <footer>
                    <Footer className='Layout' />

                </footer>










            </div>
        );

    }


}
export default Layout;