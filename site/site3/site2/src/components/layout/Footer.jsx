function Footer(props) {
  return (
    <footer
      id="footer"
      className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}
      aria-label="Footer"
    >
      <div className="footer__inner container">
        <div className="footer__left">
          <h4>Leeyanggoo</h4>
          <p>
            안녕하세요!
            <br />
            더 다양한 정보 확인
            <br />
            leeyanggoo@gmail.com
          </p>
          <ul className="sns">
            <li>
              <a href="/">
                <span className="ir">페이스북</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">인스타그램</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">유튜브</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">깃</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">디스코드</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <div className="footer__menu">
            <div>
              <h4>사이트</h4>
              <ul>
                <li>
                  <a href="/">웹표준 사이트</a>
                </li>
                <li>
                  <a href="/">반응형 사이트</a>
                </li>
                <li>
                  <a href="/">패럴랙스 사이트</a>
                </li>
                <li>
                  <a href="/">포트폴리오 사이트</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>유형</h4>
              <ul>
                <li>
                  <a href="/">이미지 유형</a>
                </li>
                <li>
                  <a href="/">카드 유형</a>
                </li>
                <li>
                  <a href="/">이미지/텍스트 유형</a>
                </li>
                <li>
                  <a href="/">배너 유형</a>
                </li>
                <li>
                  <a href="/">텍스트 유형</a>
                </li>
                <li>
                  <a href="/">푸터 유형</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>스크립트</h4>
              <ul>
                <li>
                  <a href="/">검색 이펙트</a>
                </li>
                <li>
                  <a href="/">퀴즈 이펙트</a>
                </li>
                <li>
                  <a href="/">마우스 이펙트</a>
                </li>
                <li>
                  <a href="/">슬라이드 이펙트</a>
                </li>
                <li>
                  <a href="/">패럴랙스 이펙트</a>
                </li>
                <li>
                  <a href="/">게임 이펙트</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>레퍼런스</h4>
              <ul>
                <li>
                  <a href="/">CSS</a>
                </li>
                <li>
                  <a href="/">FONTS</a>
                </li>
                <li>
                  <a href="/">BLOG</a>
                </li>
                <li>
                  <a href="/">REFERENCE</a>
                </li>
                <li>
                  <a href="/">TURTORIAL</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Copyright 2023. All Rights Reserved. - Designed by Leeyanggoo</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
