function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      <div className="youtube__inner">
        <div className="youtube__header container">
          <h3>문학 유튜브 추천</h3>
          <p>
            더 다양한 강의가 유튜브를 통해 제공되고 있습니다.
            <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__body">
          <div className="youtube__item">
            <div>
              <img src="../assets/images/youtube/youtube01.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/youtube/youtube02.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/youtube/youtube03.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/youtube/youtube04.png" alt="유튜브" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
