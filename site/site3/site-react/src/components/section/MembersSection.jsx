import React from 'react'

const memberTitle = {
  title: <h3>오늘의 시인</h3>,
  sub: <p>펜촉이 잉크로 촉촉한 시인들을 소개합니다.</p>
}

const memberText = [
  {
    imgSrc: "../assets/images/members/peep-1.svg",
    name: "김덕배",
    link: "작품 보기"
  },
  {
    imgSrc: "../assets/images/members/peep-2.svg",
    name: "김덕배",
    link: "작품 보기"
  },
  {
    imgSrc: "../assets/images/members/peep-3.svg",
    name: "김덕배",
    link: "작품 보기"
  },
]

function Member({imgSrc, name, link}){
  return (
    <div className="member">
      <figure className="member__header">
        <img src={imgSrc} alt="member" />
      </figure>
      <div className="member__body">
        <h4>{name}</h4>
        <a href="/" className="btn">
          {link}
        </a>
      </div>
    </div>
  )
}

function MembersSection(props) {
  return (
    <section id="membersSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      {memberTitle.title}
      {memberTitle.sub}
      <div className="members__inner container">
        {memberText.map((text, index)=>(
            <Member 
              key={index}
              imgSrc={text.imgSrc}
              name={text.name}
              link={text.link}
            />
          ))}
      </div>
    </section>
  );
}
export default MembersSection;
