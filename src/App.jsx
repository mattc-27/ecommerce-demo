import React from 'react';
import logoLarge  from './logoLarge.jpg';
import { Wrapper } from './Wrapper';
import { CardListHome, InfoHorizontal, InfoVertical } from './home-components';
import { CardData, Products } from './data';
import './style.css';


export default function App() {

    return (
        <>
            <header>
                <div className='header-content'>
                    <div className='header-logo'>
                        <h2>PurRoots</h2>
                    </div>
                    <nav>
                        <a className='nav-link' href='https://mattc-27.github.io/'>Home</a>

                    </nav>
                </div>
            </header>
            <div className='main'>
                <div className='title m-2' style={{border: '1px solid #fff'}}>
                    <h1>Hello world</h1>
                    <img style={{height: '50%', margin: '2%'}} src={logoLarge} />
                </div>
                <Wrapper />
                <CardListHome data={CardData} />
                <InfoHorizontal />
                <InfoVertical products={Products} />
            </div>
        </>
    );
}