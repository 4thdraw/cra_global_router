import React from 'react';
import { useParams } from 'react-router-dom';

export default function Content() {
  const { id } = useParams();
  return (
    <div className='px-3'>
        <p className='text-end'>
           home / {id}
        </p>
        <div className='subpage'>

        </div>        
    </div>
  )
}
