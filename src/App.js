// 모듈
import { Route, Routes } from "react-router-dom";
// 컨텐츠컴포넌트
import Layout from "./layout/Layout";
import Home from "./page/Home";
import Content from "./page/Content";
import Board from "./page/Board";
import Nopage from "./page/Nopage";

// 그리드시스템
import "bootstrap/dist/css/bootstrap.min.css";

function App({leng, data}) { 
  return (
    <div className="App ">
      <Layout data={data}>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`/${leng !== 'kr' && leng }/content/:id`} element={<Content />} />
              <Route path={`/${leng !== 'kr' && leng }/board/:id`} element={<Board />} />
              <Route path="*" element={<Nopage />} />
           </Routes>
      </Layout>
    </div>
  );
}
export default App;
