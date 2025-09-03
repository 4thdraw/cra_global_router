import React from 'react';
import { useParams } from 'react-router-dom';
import Location from '../utile/Location';


export default function Content({data, leng}) {

  const { id } = useParams(); 

  const renderComponent = () => {
    
    switch (id) {
      case 'about':
        return <p>회사소개컴포넌트생성_분업</p>;
      case 'location':
        return <p>오시는길 컴포넌트는 누가 만드렁?</p>;
      case 'history':
        return <p>연혁컴포넌트는 누가?</p>;
      default:
        return <div>존재하지 않는 페이지입니다.</div>;
    }
  };

  return (
    
    <div className='px-3'>
        <Location leng={ leng } title={ data[id] }></Location>
        <div className='subpage'>
          {
            console.log(data[id]) // 컨텐츠 관련 데이터
          }
          <h2>{ data[id]['page']['title'] }</h2>
          <p>{ data[id]['page']['p'] }</p>
          <div>
              {renderComponent()}
          </div>
        </div>        
    </div>
  )
}
