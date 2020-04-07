import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from './Main/Main';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function Layout()
{
    return (<div>

        <Header/>

        <div  className="my-container">


            <Nav />
            <Main />
            <Footer/>


        </div>
        </div>


    );
}
export default Layout;
