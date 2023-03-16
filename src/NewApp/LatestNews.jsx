
import axios from 'axios';
import React, { useState } from 'react';
export default function LatestNews() {
  const[data,setdata]=useState([]);

// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7b2f665b9e574fc2908d34cbf09af381`).then(Response => Response.json()).then(data=>setdata(data.articles));

axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7b2f665b9e574fc2908d34cbf09af381`).then(response=> setdata(response.data.articles)).catch((error)=>{
  console.log(error)
})





return (
  <>
  <section className="main">
    <div className='container'>
      <h1>Braking News</h1>
      <div className="row py-2">
          {data.map((curritem)=>{
                                return(
                                     <div className="col-3" id='sam'>
				                                <img src={curritem.urlToImage}className="card-img-top"/>
				                                  <div className="card-body">
					                                  <div className="card-title">{ curritem.title}</div>
					                                  <div className="card-text">{curritem.publishedAt}</div>
				                                  </div>
		                                	</div> 
	                                    );
                           })}
	        </div>              
    </div>
 </section>
  </>
)
}

