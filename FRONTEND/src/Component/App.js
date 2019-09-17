import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
const getProductData = () => axios.get('/getData01').then( (res) => res.data );
const addProductAction = (product_name,product_price) => (axios.post('/add',{product_name,product_price}).then((response) => response.data));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      product_name:'',
      product_price:''
    }
  }

  componentWillMount() {
    if(this.state.data === null){
      getProductData().then((res) => {
        this.setState({
          data:res
        })
      })
    }
  }
  
  printData = () => {
   
    if(this.state.data !== null){
      return this.state.data.map((value, key) => {
        return <Product
            key = {key}
            product_name = {value.product_name}
            product_price = {value.product_price}

        />
      })
    }
  }

  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
        [name]: value
    })
}

handleClick = () => {
    console.log(JSON.stringify(this.state));

    // viet binh thuong
    // var product_name = this.state.product_name;
    // var product_price = this.state.product_price;

    // viet gon 
    // var {product_name} = this.state;
    // var {product_price} = this.state;

    //viet cuc gon 
    var {product_name, product_price} = this.state;
    var dataTemp = [];
    var item = {};
    item.product_name = product_name;
    item.product_price = product_price;
    dataTemp = this.state.data;
    if(item.product_name !==''){
      dataTemp.push(item);
      this.setState({
        data:dataTemp
      })
    }
    
    
    
    addProductAction(product_name, product_price).then((response) => {
        console.log(response);
    })
}

  render() {
    return (
        <div>
          <HeadTitle/>
          <div className="container">
          <div className="row">

          <div className="col-8">
            <div className="row">
              {this.printData()}
            </div>
          </div>

          <div className="col-4">
            <div className="row">
            
                    <form >
                        <div className="form-group">
                        <label >Add product name</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_name" />
                        <small  className="form-text text-muted">Help text</small>
                        </div>
                        <div className="form-group">
                        <label >Add product price</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_price" />
                        <small  className="form-text text-muted">Help text</small>
                        </div>
                        <button onClick = {() => this.handleClick()} type="reset" className="btn btn-block btn-primary">Submit</button>
                    </form>
                    
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}
}

export default App;
