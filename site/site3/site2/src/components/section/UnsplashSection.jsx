function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]} ${props.attr[3]}`}>
      <div className="unsplash__inner">
        <div className="unsplash__header container">
          <h3>시요일 기획</h3>
          <p>
            문학의
            <br />
            모든 고민
          </p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__body">
          <div className="unsplash__item">
            <div>
              <img src="../assets/images/unsplash/unsplash01.png" alt="기획" />
            </div>
            <div>
              <img src="../assets/images/unsplash/unsplash02.png" alt="기획" />
            </div>
            <div>
              <img src="../assets/images/unsplash/unsplash03.png" alt="기획" />
            </div>
            <div>
              <img src="../assets/images/unsplash/unsplash04.png" alt="기획" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;
