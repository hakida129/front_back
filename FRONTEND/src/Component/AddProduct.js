import React, { Component } from 'react'
import axios from 'axios';
const addProductAction = (product_name,product_price) => 
    (axios.post('/add',{product_name,product_price})
    .then((response) => response.data) ) 
 
     

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price:''
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

        addProductAction(product_name, product_price).then((response) => {
            console.log(response);
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
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
                        <button onClick = {() => this.handleClick()} type="reset" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>

        )
    }
}
