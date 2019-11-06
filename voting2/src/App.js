 import React from 'react';
 import './App.css';
 import Seed from './seed';
 import {Component} from 'react';
class Product extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     products: []
  //   }
  // }
  handleUpVote =()=>{
  this.props.onVote(this.props.id);
  };
  render(){
    return (
      <div className = "item">
        <div className = "image">
          <img src={this.props.productImageUrl} alt={''}/>
        </div>
        <div className = "middle aligned content">
          <div className = "header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon"/>
            </a>
            {this.props.votes}
          </div>
          <div className= "description">
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p> {this.props.description} </p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image"
                 src={this.props.submitterAvatarUrl}/>
          </div>
        </div>
      </div>
    );
}
    }

    class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products:[],
    };
  };
  componentDidMount(){
    this.setState({products: Seed()})
  }
  handleEmitEvent=(productId)=>{
    console.log(productId + ' was upvoted!');
    const nextProducts = this.state.products.map((product)=>{
      if(product.id ===productId) {
        return Object.assign({}, product,
            {votes: product.votes + 1})
      }
      else {
        return product
      }
    });
    this.setState({products:nextProducts});
  };
render(){

  const products = this.state.products.sort((a, b)=> (
      b.votes - a.votes));

  const productComponents = this.state.products.map((product)=>(
    <Product
      key={'product-' + product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onVote={this.handleEmitEvent}
    />)

  );
  return(
      <div className="ui stackable items">
        {productComponents}
      </div>
  );

};
    }



 class App extends Component{
  render(){
    return (
        <div className = 'App'>
          <ProductList />
        </div>
    );
  }
}
export default App;
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

