import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            url: "",
            name: "",
            price: ''
        }
    }
    name = (params) => {
        
    }
    
    urlChange = (e) => {
        this.setState({url: e.target.value})
    }

    nameChange= (e) => {
        this.setState({name: e.target.value})
    }

    priceChange = (e) => {
        this.setState({price: e.target.value})
    }

    cancelFN = () => {
        this.setState({url: "", name: "", price: ""})
    }

    render() {
        return (
            <div>
                <input placeholder="Image URL" onChange={this.urlChange} value={this.state.url}></input>
                <input placeholder="Product Name" onChange={this.nameChange} value={this.state.name}></input>
                <input placeholder="Price" onChange={this.priceChange} value={this.state.price}></input>
                <button onClick={() => this.cancelFN()}>Cancel</button>
                <button>Add To Inventory</button>
            </div>
        )
    }
}
