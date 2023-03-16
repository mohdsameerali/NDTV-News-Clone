
import React,{useState} from 'react'
import NewsNavbar from './NewsNavbar'
import {css} from "./News.css"

export default function WorldNews() {
  const[data,setdata]=useState([]);

  fetch( `https://newsapi.org/v2/everything?q=life style&apiKey=7b2f665b9e574fc2908d34cbf09af381`).then(Response => Response.json()).then(data=>setdata(data.articles));

  
  
  return (
    <>
       <div className='bigContainer'>
          <NewsNavbar/>  
          <div className="container">
              <h1>International News</h1>
              	 <div className="row py-5">
                     {data.map((curritem)=>{
                                            return(
                                             		<div className="col-3">
				                                             <img src={curritem.urlToImage} alt='props' className="card-img-top"/>
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
