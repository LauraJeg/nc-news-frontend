import './App.css'
import ArticlePage from './Components/ArticlePage';
import Articles from './Components/Articles'
import Header from './Components/Header'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Topics from './Components/Topics';



function App() {
  const [currArticles, setCurrArticles] = useState([])
  return (<>
    <Header/>
    <Routes>
      
      <Route path="/" element={ <Articles currArticles = {currArticles} setCurrArticles = {setCurrArticles}/>} />
      <Route path="/article/:article_id" element={<ArticlePage />} />
      <Route path='topics' element={<Topics/>}/>

    </Routes>
    </>
  )
}

export default App
