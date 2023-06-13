import React from 'react'

const portTitle = {
  title:(
    <h3>
        오늘의 시<em>詩</em>
      </h3>
  ),
  sub:(
    <p>당신을 위한 시詩 한 편</p>
  )
};

const portText = [
  {
    portImg: "../assets/images/ports/today01.png",
    iconImg: "../assets/images/members/peep-4.svg",
    name: "김덕배",
    job: "시인",
    desc: "나의 밤은 당신의 낮보다 아름답다"
  },
  {
    portImg: "../assets/images/ports/today02.png",
    iconImg: "../assets/images/members/peep-5.svg",
    name: "김덕배",
    job: "시인",
    desc: "잊혀진 도시의 목소리"
  },
  {
    portImg: "../assets/images/ports/today03.png",
    iconImg: "../assets/images/members/peep-6.svg",
    name: "김덕배",
    job: "시인",
    desc: "별빛 아래, 그리움이 선물하는 것들"
  },
  {
    portImg: "../assets/images/ports/today04.png",
    iconImg: "../assets/images/members/peep-7.svg",
    name: "김덕배",
    job: "시인",
    desc: "햇살이 부서진 그 곳에서"
  },
  {
    portImg: "../assets/images/ports/today05.png",
    iconImg: "../assets/images/members/peep-8.svg",
    name: "김덕배",
    job: "시인",
    desc: "눈물로 쓰여진 희망의 노래"
  },
  {
    portImg: "../assets/images/ports/today06.png",
    iconImg: "../assets/images/members/peep-9.svg",
    name: "김덕배",
    job: "시인",
    desc: "그대를 향한 미완성의 서정시"
  },
];

function PortText({portImg, iconImg, name, job, desc}) {
  return(
    <div className="port">
      <figure className="port__header">
        <img src={portImg} alt="포트폴리오" />
      </figure>
      <div className="port__body">
        <span>
          <img src={iconImg} alt="멤버" />
        </span>
        <div>
          <h4>
            {name} <em>{job}</em>
          </h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
};

function PortsSection(props) {
  return (
    <section id="portsSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      {portTitle.title}
      {portTitle.sub}
      <div className="ports__inner container">
        <div className="port__btn">
          <a href="/" className="active">
            月
          </a>
          <a href="/">火</a>
          <a href="/">水</a>
          <a href="/">木</a>
          <a href="/">金</a>
          <a href="/">土</a>
          <a href="/">日</a>
        </div>
        <div className="port__cont">
          {portText.map((item, index) => (
            <PortText 
              key={index}
              portImg={item.portImg}
              iconImg={item.iconImg}
              name={item.name}
              job={item.job}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PortsSection;
