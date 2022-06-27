import React from 'react';
import Main from './Components/Main/Main';
import AddArticl from './Components/Slidebar/AddArticle/AddArticl'
import AllArticle from './Components/Slidebar/AllArticle.jsx/AllArticle'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main page={''} />} />
        <Route path="all-article" element={<Main page={<AllArticle/>} />} />
        <Route path="add-article" element={<Main page={<AddArticl/>}/>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
