import React from 'react'
import CardData from './cardData'
import "./style.css"

const PokemonCard = () => {
  return (
    <>
        <div className='container'>
            {
                CardData.map((curElm)=>
                {
                    return(
                        <>
                            <div className='box'>
                                <div className='content'>
                                    <div className='image-box'>
                                        <img src={curElm.img} alt={curElm.cardName}></img>
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h3>{curElm.cardName}</h3>
                                            <p>Set : {curElm.cardSet}</p>
                                            <span>Year : {curElm.setYear}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div> 
    </>
  )
}

export default PokemonCard