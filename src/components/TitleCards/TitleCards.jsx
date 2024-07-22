import React,{useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useSearchParams } from 'react-router-dom'
import {Link} from 'react-router-dom' 


const TitleCards = ({title,category}) => {
  const [apiData,setApiData] = useState([])
  const cardsRef = useRef()
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWUzYTRjMDhmOWJiMDliZmVlOTY2MDBmYjBhNzI1YiIsIm5iZiI6MTcyMTYyNjU0MC42NzExMzgsInN1YiI6IjY2OWRlZWEyNzI3OTJhMDEyMTRjNGY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mufGXIAM5I2pxxelB3b0nUGIzt4eRFc864MNNGJ9Bw4'
    }
  };
  
 
const handleWheel = (event)=>{
  event.preventDefault()
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
  
  cardsRef.current.addEventListener('wheel',handleWheel)
},[])
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
