import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src="https://kenh14cdn.com/zoom/280_175/2019/8/22/collage-15664723856271620296161-crop-15664724454992018620895.png" alt="" />
                    <div className="card-body">
                    <h4 className="card-title">{this.props.product_name}</h4>
                    <p className="card-text">{this.props.product_price}</p>
                    </div>
                </div>
            </div>

        )
    }
}
