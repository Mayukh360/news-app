import Navbar from '@/components/navbar/Navbar'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Sports() {
    const [newsData,setNewsData]=useState([])
    const fetchData=async()=>{
      const response= await axios.get("https://newsdata.io/api/1/news?apikey=pub_285851ea9f67f43a46a67b4eeb96e1547912d&country=in&language=en&category=sports ");
      console.log(response.data.results);
      setNewsData(response.data.results)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        <Navbar/>
        <div>
        {newsData && newsData.map((item)=>(
            <li key={item.article_id}>Titile:{item.title}
            <img src={item.image_url}/>
            Content:{item.content}
            </li>
        ))}
    </div>
    </div>
  )
}
