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


function InfoHorizontal() {

    return (
        <div
            className='col content-end items-end w-100 h-500'
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1601698832159-665cbefd11da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE3MDI4Njc1MTd8&ixlib=rb-4.0.3&q=80&w=1080')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto'
            }}
        >
            <div className='col content-center m-1 w-50 h-100'
            >
                <div
                    className='bg-style-2 text-container-2 card-text'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipiscing elit. Vestibulum commodo accumsan gravida ex.
                    </p>
                </div>
            </div>
        </div>
    );
}



function InfoVertical({ products }) {

    function CardVertical({ item }) {

        return (
            <div style={{
                height: '20%',
                width: '70%',
                height: 'auto',
                margin: '1%'
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
                <div className='row w-100 mt-1 card-text'>
                    <p>{item.text}</p>
                </div>
                <div className='row w-100 mt-1 card-text'>
                    <button className='card-button-1'>{item.buttonText}</button>
                </div>
            </div>
        )
    }

    const infoList = products.map((item) => (
        <CardVertical
            key={item.id}
            item={item}
        />
    ))

    return (
        <div className='row content-center items-center w-100 bg-style-3'>
            <div className='row mt-1 w-90 bg-style-1'>
                <div
                    className='col w-50 m-1'
                    style={{
                        width: '50%',
                    }}
                >
                    <img style={{ width: '100%', height: '100vh', margin: '1%' }} src={`https://images.unsplash.com/photo-1520224855316-280b2e6afca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE3MDI3NjE1MjF8&ixlib=rb-4.0.3&q=80&w=1080`} />
                    <img style={{ width: '100%', height: '100vh', margin: '1%' }} src={'https://images.unsplash.com/photo-1634603053406-c4fd7a33f4dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE3MDI3NjMxODZ8&ixlib=rb-4.0.3&q=80&w=1080'} />
                </div>
                <div className='col content-around items-end w-100'>
                    {infoList}
                </div>
            </div>
        </div>
    );
}

export { CardListHome, InfoHorizontal, InfoVertical };