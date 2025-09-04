import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {
  const { global } = useParams();
  const getLanguageLabel = () => {
    switch (global) {
      case 'cn':
        return '중국어 홈컴포넌트를 제작한다.';
      case 'en':
        return '영어 홈컴포넌트를 제작한다.';
      default:
        return '한국어 홈컴포넌트를 제작한다.';
    }
  };

  return (
    <section>
      <p>Language: {getLanguageLabel()}</p>
    </section>    
  )
}
