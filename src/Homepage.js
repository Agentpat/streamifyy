import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './Homepage.css'
import Header from './components/Header/Header'
import Hero from './components/Card/HeroCard/Hero'

import Footer from './components/Footer/Footer'

function Homepage() {
  const [data , setData] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_32079ad9d91fdbb5527702ba11823aeb9187f&q=breaking%20news");
        const articles = response.data.results;

        if (articles && articles.length > 0) {
          setData(articles);
          console.log(articles);
        } else {
          console.error("API response does not contain articles.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getArticles();
  }, []);

  return (
    <div>  
      <Header/>
      <Hero data={data}/>
      <Footer/>
    </div>
  )
}

export default Homepage