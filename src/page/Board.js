import React from 'react'
import { useParams } from 'react-router-dom';
import Location from '../utile/Location';

export default function Board({leng, data}) {
    const { id } = useParams();
    return (
      <div className='px-3'>
          <Location leng={ leng } title={ data[id] }></Location>
          <div className='subpage'>
            <h2>{ data[id]['page']['title'] }</h2>
            <p>{ data[id]['page']['p'] }</p>
  
          </div>        
      </div>
    )
}
