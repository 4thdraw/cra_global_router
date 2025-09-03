import React from 'react';
import { useParams } from 'react-router-dom';

export default function Content({data, leng}) {
  const { id } = useParams();

  const homeLabel = {
    kr: '홈',
    en: 'home',
    cn: '主页'
  };

  return (
    <div className='px-3'>
        <p className='text-end'>
           {homeLabel[leng]} / { data[id]['label'] }
        </p>
        <div className='subpage'>
          {
            console.log(data[id]) // 컨텐츠 관련 데이터
          }
        </div>        
    </div>
  )
}
