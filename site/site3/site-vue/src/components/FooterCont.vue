<template>
  <div>
    <footer id="footer" aria-label="Footer">
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
  </div>
</template>

<style lang="scss">
// footer__wrap
.footer__inner {
    @include flex-between;
    flex-wrap: wrap;
    .footer__left {
        width: 30%;
        h4 {
            font-size: 18px;
            margin-bottom: 20px;
        }
        p {
            font-size: 14px;
            color: var(--color_gray);
            margin-bottom: 20px;
            line-height: 1.8;
        }
        .sns {
            display: flex;
            gap: 10px;

            li {
                a {
                    display: block;
                    background-color: var(--button_sky);
                    border-radius: 50%;
                    width: 45px;
                    height: 45px;
                    background-image: url(../../images/footer/sns_icon.svg);
                    &:hover {
                        box-shadow: 0 0 0 2px var(--sky_border) inset;
                    }
                }
                &:nth-child(1) a {
                    background-position: 0 0;
                }
                &:nth-child(2) a {
                    background-position: -45px 0;
                }
                &:nth-child(3) a {
                    background-position: -90px 0;
                }
                &:nth-child(4) a {
                    background-position: -135px 0;
                }
                &:nth-child(5) a {
                    background-position: -180px 0;
                }
            }
        }
    }
    .footer__right {
        width: 70%;

        .footer__menu {
            @include flex-between;

            > div {
                h4 {
                    font-size: 18px;
                    margin-bottom: 20px;
                }
                ul {
                    li {
                        margin: 5px 0;
                        a {
                            font-size: 14px;
                            color: var(--color_gray);

                            &:hover{
                                text-decoration: underline;
                                text-underline-position: under;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer__copyright {
        width: 100%;
        text-align: center;
        border-top: 1px solid var(--color_gray);
        margin-top: 50px;

        p {
            margin-top: 50px;
            font-size: 14px;
            color: var(--color_gray);
        }
    }
}
</style>
