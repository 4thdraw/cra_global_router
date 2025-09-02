import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Layout>
           <Routes>
              <Route path="/" element={<div>Home Page</div>} />
              <Route path="/content/:id" element={<div>Home Page</div>} />
              <Route path="/board/:id" element={<div>Home Page</div>} />
              <Route path="*" element={<div>Home Page</div>} />
           </Routes>
      </Layout>
    </div>
  );
}

export default App;
