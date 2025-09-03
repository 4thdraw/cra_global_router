import React from 'react'

export default function Location({leng, title}) {

  const homeLabel = {
        kr: '홈',
        en: 'home',
        cn: '主页'
  };

  return (
    <p className='text-end'>
        {homeLabel[leng]} / { title['label'] }
    </p>
  )
}
