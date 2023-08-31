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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {newsData.map((item) => (
      <div key={item.article_id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={item.image_url} alt="News" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.content}</p>
          <a href={item.link} className="text-blue-500 hover:underline">Read More</a>
        </div>
      </div>
    ))}
  </div>
    </div>
  )
}
