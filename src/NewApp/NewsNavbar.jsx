import React, { useState } from 'react'
import { Link} from 'react-router-dom';


export default function NewsNavbar() {
  const[data,setdata]=useState([]);
  const[search,setsearch]=useState();

  function handleSearch(e){
    alert('clicked')
    e.preventDefault();
  fetch( `https://newsapi.org/v2/everything?q=${search}&apiKey=7b2f665b9e574fc2908d34cbf09af381`).then(Response => Response.json()).then(data=>setdata(data.articles));
  }
  
  return (
    <>
          <section className="newsNavbar">
               <nav className="navbar navbar-expand-lg  pl-5 pr-5   navbar-light ">
                 <img id='logo' src='images\NDTV.png'/>
                  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto   text-center">
                      <Link to={'/'}>
                        <li className="nav-item active "><a className="nav-link  " href="#">LATEST <span className="sr-only">(current)</span></a></li>
                      </Link>
                      <Link to={'/WorldNews'}>
                        <li className="nav-item "><a className="nav-link" href="#">WORLD</a></li> 

                      </Link>
                      <Link to={'/IndiaNews'}>
                          <li className="nav-item"><a className="nav-link" href="#">INDIA</a></li> 
                      </Link>
                      <Link to={'/LiveNews'}>
                          <li className="nav-item"><a className="nav-link" href="#">LIVE NEWS</a></li> 
                      </Link>
                      <Link to={'/BusinessNews'}>
                          <li className="nav-item"><a className="nav-link" href="#">BUSINESS</a></li> 
                      </Link>
                      <Link to={'/LifeStyle'}>
                          <li className="nav-item"><a className="nav-link" href="#">LIFE STYLE</a></li> 
                      </Link>
  
                      </ul>
                      <form className="form-inline    my-lg-0">
                         <input className="form-control mr-sm-2" type="search" value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder="Search" aria-label="Search"/>
                         <button className="btn btn-outline-success my-2 my-sm-0"   onClick={handleSearch} type="submit">Search</button>
                      </form>
                  </div>
                </nav>
                {/* {data.length>=1?<SearchCard/>:null} */}
                {data.length>=1?
<div className="container">
  <h1>search  News</h1>

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
	</div> :null}
                   

    </section>
    </>
  )
}
