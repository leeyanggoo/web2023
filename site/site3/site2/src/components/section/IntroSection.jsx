function IntroSection(props) {
  return (
    <section id="introSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      <h3 className="blind">시요일 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>we are</span>
          <h3>
            시요일?
            <br />
          </h3>
          <p>
            시요일은 시요일은 최초·최대의
            <br /> 시詩큐레이션 검색 서비스입니다.
          </p>
        </div>
        <div className="intro__desc">
          <div>
            <h4 className="icon-book">43,000여편의 시</h4>
            <p>7개 출판사가 참여하여 고시조부터 현대대표시·창비시선·동시 등을 모두 담은 앱</p>
          </div>
          <div>
            <h4 className="icon-hand">차별화된 큐레이션</h4>
            <p>시인들이 직접 엄선한 시를 배달하고 추천하는 큐레이션 기능</p>
          </div>
          <div>
            <h4 className="icon-search">강력한 검색 기능</h4>
            <p>본문·시어·시인·태그(주제어)를 이용한 빠르고 강력한 검색</p>
          </div>
          <div>
            <h4 className="icon-pencil">시作!일기</h4>
            <p>당신의 시를 남겨보세요!</p>
          </div>
        </div>
      </div>
      =
    </section>
  );
}
export default IntroSection;
