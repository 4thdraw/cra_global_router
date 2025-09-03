import React from 'react';
import Hd from './Hd';
import Ft from './Ft';
import Title from './Title';
import Quick from './Quick';

export default function Layout({children, data, setLeng}) {
  return (    
    <div className='wrapper'>
        <Hd data={data} setLeng={setLeng} />
        <Title />
        <div className='d-flex flex-wrap align-items-start container'>
            <div className='content flex-grow-1'>
                {children}
            </div>
            <Quick />  
        </div>
        <Ft />
    </div>
  )
}
