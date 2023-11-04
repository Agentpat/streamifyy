import React, { useEffect, useState } from 'react';
import './components/Card/HeroCard/Hero.css';
import axios from 'axios';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from './components/Header/Header';
import Hero from './components/Card/HeroCard/Hero';


function truncateContent(content, maxLength) {
  if (content.length > maxLength) {
    return content.slice(0, maxLength) + '...';
  }
  return content;
}

function Business() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_32079ad9d91fdbb5527702ba11823aeb9187f&q=business%20news");
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
  <div className="hero">
    <Header/>
    <Hero data={data} />
  </div>
);
}

export default Business










