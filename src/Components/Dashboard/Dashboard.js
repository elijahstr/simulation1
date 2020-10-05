import React, { Component } from 'react';
import Product from '../Product/Product';


export default class Dashboard extends Component {
    render() {
        const mappedProducts = this.props.dummyArray.map((data, i) =>
        (<Product key={i} name={data.name} price={data.price} image={data.image}/>)
        )
        return (
            <div>
                {mappedProducts}
            </div>
        )
    }
}


// const mappedButtons1 = this.props.charArr.map((character, i) => (
//     <SelectButton
//         key={i}
//         character={character}
//         getChar={this.props.getChar1}
//         charArr={this.props.charArr}
//         />
// ))

//price={data.price} image={data[i].image}