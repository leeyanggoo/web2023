function MembersSection(props) {
  return (
    <section id="membersSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      <h3>오늘의 시인</h3>
      <p>펜촉이 잉크로 촉촉한 시인들을 소개합니다.</p>

      <div className="members__inner container">
        <div className="member">
          <figure className="member__header">
            <img src="../assets/images/members/peep-1.svg" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>김덕배</h4>
            <a href="/" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="../assets/images/members/peep-2.svg" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>김덕배</h4>
            <a href="/" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="../assets/images/members/peep-3.svg" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>김덕배</h4>
            <a href="/" className="btn">
              작품 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MembersSection;
