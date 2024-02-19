import React from 'react'

const movieTitle = {
  title: <h3>주간 시집 추천</h3>,
  sub: <p>시요일의 시선이 닿은 곳.<br /></p>
};

const movieItem = [
  {
    img: "../assets/images/movies/book01.png",
    title: "시집"
  },
  {
    img: "../assets/images/movies/book02.png",
    title: "시집"
  },
  {
    img: "../assets/images/movies/book03.png",
    title: "시집"
  },
  {
    img: "../assets/images/movies/book04.png",
    title: "시집"
  }
];

function MovieItem({img, title}){
  return(
    <div>
      <img src={img} alt={title} />
    </div>
  )
};


function MoviesSection(props) {
  return (
    <section id="moviesSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      <div className="movies__inner">
        <div className="movies__header container">
          {movieTitle.title}
          {movieTitle.sub}
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="movies__body">
          <div className="movies__item">
            {movieItem.map((item, index) => (
              <MovieItem
                key={index}
                img={item.img} 
                movieTitle={item.title} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MoviesSection;