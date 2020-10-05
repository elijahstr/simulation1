import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.price}
                {this.props.image}
            </div>
        )
    }
}
