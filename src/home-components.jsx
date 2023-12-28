import React, { useState, useEffect } from 'react';
//import { CardData } from './data';

function CardListHome({ data }) {

    function Card({ item }) {

        return (
            <div style={{
                height: '900px',
                width: '30%',
                margin: '1% 0',
                height: 'auto'
            }}>
                <div
                    className='col content-center items-center w-100'
                    style={{
                        backgroundImage: `${item.image}`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '300px',
                    }}>
                    <div className='card-caption'>
                        <p>{item.caption}</p>
                    </div>
                </div>
                <div className='card-text'>
                    <p>{item.text}</p>
                </div>
                <div className='row content-start items-center m-1 w-90'>
                    <button className='card-button-1'>{item.buttonText}</button>
                </div>
            </div>
        )
    }

    const infoList = data.map((item) => (
        <Card
            key={item.id}
            item={item}
        />
    ))

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh', justifyContent: 'space-evenly', alignItems: 'center' }}>
            {infoList}
        </div>
    )
}


export { CardListHome };