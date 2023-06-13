<template>
  <header id="header" aria-level="1">
    <div className="header__inner container">
      <h1 className="header__logo Chosun">
        <router-link to="/"> 詩요일 <em>세상의 모든 시</em> </router-link>
      </h1>
      <nav className="header__nav" role="navigation">
        <ul>
          <li>
            <router-link to="/member">웹진 소개</router-link>
          </li>
          <li>
            <router-link to="/port">오늘의 시</router-link>
          </li>
          <li>
            <router-link to="/unsplash">연재</router-link>
          </li>
          <li>
            <router-link to="/movie">출간</router-link>
          </li>
          <li>
            <router-link to="/youtube">정기구독</router-link>
          </li>
          <li>
            <router-link to="/home">문의</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
// header__wrap
.header__inner {
  text-align: center;
  padding: 10px 0;
  .header__logo {
    width: 100%;
    margin-bottom: 20px;
    a {
      font-size: 30px;
      display: inline-block;
      padding: 5px 5px 0 5px;
      margin: 5px 5px 0 5px;
      text-transform: uppercase;
      font-weight: 800;

      em {
        text-transform: lowercase;
        font-weight: 400;
        font-size: 18px;
        color: var(--color_gray);
      }
    }
  }
  .header__nav {
    width: 100%;
    ul {
      padding: 0 10%;
      display: flex;
      justify-content: space-between;
      li {
        a {
          display: inline-block;
          padding: 10px;
          margin: 2px;
          position: relative;

          &::before {
            content: "";
            width: calc(100% - 20px);
            height: 2px;
            background-color: var(--color_main);
            position: absolute;
            left: 10px;
            bottom: 5px;
            transform: scaleX(0);
            transition: all 0.3s ease;
          }
          &:hover::before {
            transform: scaleX(1);
          }
        }
      }
    }
  }
}
</style>
