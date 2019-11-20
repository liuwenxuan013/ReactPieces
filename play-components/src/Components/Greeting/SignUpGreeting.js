import Greeting from "./Greeting";
import React from "react";
import Mailbox from "../Mailbox/Mailbox";
import Notification from "../Notice/Notification";
import CommentList from "../Comments/CommentList";
import Terms from "../Terms/Terms";
import Calculator from "../Calculator/Calculator";
import FancyBorder from "../FancyBorder/FancyBorder";
import SplitPane from "../SplitPane/SplitPane";
import FilterableTable from "../FilterableTable/FilterableTable";
import Data from '../Datas/Data';
import MoviesFilter from "../FilterableTable/MoviesFilter";
import MusicFilter from  "../FilterableTable/MusicFilter";
import ProductsFilter from '../FilterableTable/ProductsFilter';
import PosterList from "../Posters/PosterList";
// const ITEMS=[
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}];
function SignUpGreeting(){
    return(
        <div>
                <Greeting
                    title="Welcome Back!"
                    message="Good Day!"
                >
                    <ProductsFilter/>
                    <MoviesFilter/>
                    <MusicFilter/>
                    <FilterableTable items={Data.MOVIES} />

                    <Mailbox />      <br/><br/><br/><hr/>
                    <Notification/>   <br/><br/><br/><hr/>
                    <CommentList />    <br/><br/><br/><hr/>
                    <Terms />   <br/><br/><br/><hr/>
                    <Calculator /> <br/><br/><br/><hr/>
                    <FancyBorder color="lightblue">
                        <h3 className="Dialog-title">Welcome</h3>
                        <p className="Dialog-message">thank you for visiting my website </p>
                    </FancyBorder>
                    <br/><br/><br/><hr/>

                    < SplitPane
                        left={<Terms/>}
                        right={<Calculator/>}
                        />


                        < PosterList />
                </Greeting>

        </div>
    )
}
export default SignUpGreeting;
