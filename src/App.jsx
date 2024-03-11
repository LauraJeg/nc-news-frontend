import './App.css'
import Articles from './Components/Articles'
import Header from './Components/Header'
import React, { useState } from 'react'


function App() {
  const [currArticles, setCurrArticles] = useState([])
  return (
    <>
      <Header/>
      <Articles currArticles = {currArticles} setCurrArticles = {setCurrArticles}/>
      <p> Hello</p>
      </>
  )
}

export default App
