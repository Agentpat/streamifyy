
import './Hero.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function truncateContent(content, maxLength) {
  if (content.length > maxLength) {
    return content.slice(0, maxLength) + '...';
  }
  return content;
}

  


function Hero({data}) {
  return (
    <div className="hero">
      {data.length > 0 ? (
        <div className="hero">
          {data.map((article, index) => (
            <div key={index} className="article">
              <div className="pub__info">
                <h3 className='hero__publisher'>{article.creator}</h3>
                <h4 className="hero__country">{article.country}</h4>
                <h4 className="hero__pubDate">{article.pubDate}</h4>
                <div className="social-icons">
                  <FacebookIcon className="icon" />
                  <TwitterIcon className="icon" />
                  <InstagramIcon className="icon" />
                </div>
              </div>

              <div className='hero__middle'>
                <img src={article.image_url} alt={article.title} className="hero__img" />
                <h2 className="hero__headerText">{article.title}</h2>
                <p className="content">{truncateContent(article.content, 1200)}
                  <a
                    className="read-more-link"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </p>
                
              </div>

              <div className='hero__right'>
                Advert
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loader">
          <div className="page">
            <div className="page-front"></div>
            <div className="page-back"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
