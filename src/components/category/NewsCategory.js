import React from 'react';
import NewsCategoryCard from '../Card/NewsCategoryCard/NewsCategoryCard';
import './NewsCategory.css';

function NewsCategory() {
  return (
    <div className='news-category-section'>
      <div className='topping'>
        <h2>Select News Category You Want To Read</h2>
      </div>
      <div className='each-category'>
        <NewsCategoryCard
          title="BUSINESS NEWS"
          description="As global markets experience a significant upswing, investors are celebrating strong earnings reports from major corporations, pointing to a promising economic recovery. Tech industry leaders face mounting scrutiny over data privacy practices, while small businesses continue to adapt and innovate in response to ongoing pandemic challenges."
          linkTo="/Business"
          urlToImage="business.jpg"
          className="cat"
        />

        <NewsCategoryCard
          title="ENTERTAINMENT NEWS"
          description="In the world of entertainment, a highly-anticipated blockbuster film is set to dazzle audiences with its stunning visual effects and compelling storyline. Meanwhile, a renowned musician is gearing up for a sold-out concert tour, promising fans an unforgettable night of music and entertainment. Celebrities are making headlines with their latest projects and red carpet appearances."
          linkTo="/Entertainment"
          urlToImage="downloaEntetainmentandCulture.jpg"
          className="cat"
        />

        <NewsCategoryCard
          title="ENVIRONMENT NEWS"
          description="In a recent environmental breakthrough, scientists have unveiled a groundbreaking method to combat climate change by harnessing renewable energy sources. This innovation promises to reduce carbon emissions and slow down global warming, offering hope for a more sustainable future. The technology aims to revolutionize green energy production and transform our impact on the planet."
          linkTo="/Environment"
          urlToImage="environment.jpg"
          className="cat"
        />

        <NewsCategoryCard
          title="POLITICS NEWS"
          description="In the political arena, tensions are escalating as lawmakers debate critical policy changes. Recent elections have reshaped the balance of power, leading to shifts in legislative priorities. Diplomatic negotiations are underway to address pressing global issues, while citizens closely watch the developments that will shape the future of their nations."
          linkTo="/Politics"
          urlToImage="politics.jpg"
          className="cat"
        />
      </div>
    </div>
  );
}

export default NewsCategory;
