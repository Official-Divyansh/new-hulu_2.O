import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import {results} from './utils/product'
import {trend} from './utils/trending'
import style  from '../styles/Home.module.css'
import { title } from 'process'
export default function Home({request}) {
  const [change, setChange] = useState(false)
  useEffect(()=>{
    if(request=='TopRating')
    setChange(true)
    if(request=='Trending')
    setChange(false)
  },[request])
     return (
       <section className={style.sec}>
       <div className={style.gridContainer}>
       {
         change?
         trend.map((item)=>{
           return (
             <div className={style.gridItem}>
             <Image
             src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
             height={300}
             width={400} 
             objectFit="cover"
             className={style.img}
             />
             <p className={style.overview}>{item.overview.slice(0, 40)+'...'}</p>
             <h1 className={style.title}>{item.name}</h1>
             </div>
             )
            }) :
            results.map((item)=>{
              return (
                <div className={style.gridItem}>
                <Image
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                height={300}
                width={400} 
                objectFit="cover"
                className={style.img}
                />
                <p className={style.overview}>{item.overview.slice(0, 40)+'...'}</p>
                <h1 className={style.title}>{item.title}</h1>
                </div>
                )
               }) 
          }
          </div>
             </section>
       
  )
}  


// const [items, setItems] = useState([])
// const fetchData = ()=>{
//  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=9b9709c8129a001e6b23d54c2004730a`)
//  .then(res => res.json())
//  .then(
//    (result) => {
//      setItems(result);
//    })
// }
// useEffect(()=>{
//   console.log(request)
//   fetchData()
//   console.log(items)
// },[setItems,request])
