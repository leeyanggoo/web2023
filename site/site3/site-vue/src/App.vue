<template>
  <HeaderCont attr="header__wrap bg-blue NanumM" />
  <router-view />
  <FooterCont attr="footer__wrap section bg-blue NanumM" />
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@/components/FooterCont.vue'

export default ({
  components: {
    HeaderCont,
    FooterCont
  }
})
</script>

<style lang="scss">
@import "index.scss";
</style>
