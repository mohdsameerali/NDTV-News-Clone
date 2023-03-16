

import React,{useState} from 'react'
import NewsNavbar from './NewsNavbar'
import {css} from "./News.css"

export default function IndiaNews() {
  const[data,setdata]=useState([]);

  fetch( `https://newsapi.org/v2/everything?q=india&apiKey=7b2f665b9e574fc2908d34cbf09af381`).then(Response => Response.json()).then(data=>setdata(data.articles));  
  return (
    <>
       <div className='bigContainer'>
           <NewsNavbar/>
            <div className="container">
               <h1>National News</h1>
               <div className="row py-5">
                   {data.map((curritem)=>{
                                         return(  
			                                           <div className="col-3">
				                                            <img src={curritem.urlToImage}  className="card-img-top"/>
				                                             <div className="card-body">
				                                                 	<div className="card-title">{ curritem.title}</div>
					                                                <div className="card-text">{curritem.publishedAt}</div>

                                             			    </div>
			                                           </div>
	                                              );
                  })}
		           </div>
	        </div> 
	    </div> 

    </>
  )
}



