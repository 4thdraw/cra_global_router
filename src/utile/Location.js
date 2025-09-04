import React from 'react';
import { Link } from 'react-router-dom';

export default function Location({leng, title}) {

  const homeLabel = {
        kr : ['홈','/'],
        en: ['home','/en'],
        cn: ['主页','/cn']
  };

  return (
    <p className='text-end'>
       <Link to={homeLabel[leng][1]}>{homeLabel[leng][0]}</Link>  / { title['label'] }
    </p>
  )
}
