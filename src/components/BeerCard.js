import React, { useState } from 'react'
import Beers from '../Beers.json'
import './BeerCards.css'

function BeerCard(){
    const[beerData, setBeerData] = useState(Beers)

    return(
        <div className='beerCard'>
            {beerData.map(({title, sub, text}) => (
                <div key = {title}>
                    <h1>{title}</h1>
                    <h2>{sub}</h2>
                    <p>{text}</p>
                    <button>Add to cart</button>
                </div>    
            ))}
        </div>
    )
}

export default BeerCard
