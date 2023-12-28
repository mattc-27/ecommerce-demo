import React from 'react';
import './style.css';


export function Wrapper() {

    return (
        <div
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE3MDI3NjEwODl8&ixlib=rb-4.0.3&q=80&w=1080')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '600px'
            }}
        >
            <div sclassName='col content-center items-center w-100'>
                <div className='wrapper-content'>
                    <div className='wrapper-inner'>
                        <h1>Lorem ipsum dolor sit</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipiscing elit. Vestibulum commodo accumsan gravida ex.
                        </p>
                        <div className='row content-start items-center m-1 w-70'>
                            <button className='card-button-1'>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}