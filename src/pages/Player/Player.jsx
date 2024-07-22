import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
 
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] =useState({
    name:"",
    keyL:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWUzYTRjMDhmOWJiMDliZmVlOTY2MDBmYjBhNzI1YiIsIm5iZiI6MTcyMTYyNjU0MC42NzExMzgsInN1YiI6IjY2OWRlZWEyNzI3OTJhMDEyMTRjNGY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mufGXIAM5I2pxxelB3b0nUGIzt4eRFc864MNNGJ9Bw4'
    }
  };

  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
.then(response => response.json())
.then(response => setApiData(response.results[0]))
.catch(err => console.error(err));
  },[])
  
  
  return (
    <div className='player'>
      <img src={back_arow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe 
      width="90%" 
      height="90%" 
      src={`http://www.youtube.com/embed/${apiData.key}`}
      title='trailer'
      frameBorder="0"
      allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
