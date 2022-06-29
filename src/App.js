import React from 'react';
import Main from './Components/Main/Main';
import AddArticl from './Components/Slidebar/AddArticle/AddArticl'
import AllArticle from './Components/Slidebar/AllArticle.jsx/AllArticle'
import CommentCharts from './Components/Slidebar/Charts/CommentCharts/CommentCharts'
import ArticleCharts from './Components/Slidebar/Charts/ArtticleCharts.js/ArticleCharts'


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
        <Route path="comment-chart" element={<Main page={<CommentCharts/>}/>} />
        <Route path="article-chart" element={<Main page={<ArticleCharts/>}/>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
