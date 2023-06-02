function Header(props) {
  return (
    <header id="header" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`} aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo Chosun">
          <a href="/">
            詩요일 <em>세상의 모든 시</em>
          </a>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <a href="#introSection">웹진 소개</a>
            </li>
            <li>
              <a href="#membersSection">오늘의 시</a>
            </li>
            <li>
              <a href="#portsSection">연재</a>
            </li>
            <li>
              <a href="#youtubeSection">출간</a>
            </li>
            <li>
              <a href="#unsplashSection">정기구독</a>
            </li>
            <li>
              <a href="#moviesSection">문의</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
