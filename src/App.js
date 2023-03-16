import React from 'react'
import {  Routes, Route } from 'react-router-dom';

import NewsContainer2 from './NewApp/NewsContainer2';
import WorldNews from './NewApp/WorldNews';
import IndiaNews from './NewApp/IndiaNews';
import LiveNews from './NewApp/LiveNews';
import BusinessNews from './NewApp/BusinessNews';
import LifeStyle from './NewApp/LifeStyle';
export default function App() {
  return (
    
    <Routes>
      <Route path='/' element={<NewsContainer2/>}></Route>
      <Route path='/WorldNews' element={<WorldNews/>}></Route>
      <Route path='/IndiaNews' element={<IndiaNews/>}></Route>
      <Route path='/LiveNews' element={<LiveNews/>}></Route>
      <Route path='/BusinessNews' element={<BusinessNews/>}></Route>
      <Route path='/LifeStyle' element={<LifeStyle/>}></Route>
    </Routes>
  
  )
}


