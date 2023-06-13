import React from 'react'

const unsplashTitle = {
  title: <h3>시요일 기획</h3>,
  sub: <p>문학의<br />모든 고민</p>
};

const unsplashItem = [
  {
    img : "../assets/images/unsplash/unsplash01.png",
    title: "코딩 애플",
    num: "dkelkt442"
  },
  {
    img : "../assets/images/unsplash/unsplash02.png",
    title: "코딩 애플",
    num: "dkelkt442"
  },
  {
    img : "../assets/images/unsplash/unsplash03.png",
    title: "코딩 애플",
    num: "dkelkt442"
  },
  {
    img : "../assets/images/unsplash/unsplash04.png",
    title: "코딩 애플",
    num: "dkelkt442"
  }
];

function UnsplashItem({img, title}){
  return(
    <div>
      <img src={img} alt={title} />
    </div>
  )
};

function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      <div className="unsplash__inner">
        <div className="unsplash__header container">
          {unsplashTitle.title}
          {unsplashTitle.sub}
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__body">
          <div className="unsplash__item">
            {unsplashItem.map((item, index) => (
              <UnsplashItem
                key={index}
                img={item.img} 
                title={item.title} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;
