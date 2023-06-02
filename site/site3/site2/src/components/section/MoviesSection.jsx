function MoviesSection(props) {
  return (
    <section id="moviesSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      <div className="movies__inner">
        <div className="movies__header container">
          <h3>주간 시집 추천</h3>
          <p>
            시요일의 시선이 닿은 곳.
            <br />
          </p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="movies__body">
          <div className="movies__item">
            <div>
              <img src="../assets/images/movies/book01.png" alt="시집" />
            </div>
            <div>
              <img src="../assets/images/movies/book02.png" alt="시집" />
            </div>
            <div>
              <img src="../assets/images/movies/book03.png" alt="시집" />
            </div>
            <div>
              <img src="../assets/images/movies/book04.png" alt="시집" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MoviesSection;
