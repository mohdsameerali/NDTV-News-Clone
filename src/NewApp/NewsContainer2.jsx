import React from 'react'
import LatestNews from "./LatestNews"
import NewsNavbar from "./NewsNavbar"

import {css} from "./News.css"


export default function NewsContainer2() {
  return (
    <>
       <div className='bigContainer'>
            <NewsNavbar/>
            <LatestNews/>   
       </div>
    </>
  )
}
