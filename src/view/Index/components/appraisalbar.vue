<template lang="html">
  <mt-header :title=title :style="{color:titleColoe ,background:bgColor, opacity:bgOpacity}">
  <template v-if="isBack">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </template>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</template>

<script>
export default {
  name: 'appraisalbar',
  data () {
    return {
      isMenu: false, // menu
      isBack: true, // true 为回退到app false 为回退到上一级 根据需求自己看着办
      isHome: true, // 首页ico
      title: '', // 中间title
      bgColor: '#fff', // 背景颜色
      bgOpacity: '1', // 透明度
      titleColoe: '#333' // 中间title的字体颜色
    }
  },
  methods: {
    //   定义方法接受调用者传的参数，也就是哪个页面需要调用这个导航组件，哪个页面就调用这个方法传值
    discoverFun (data) {
      this.title = data.title
      if (data.isHome) {
        this.isHome = !data.isHome
      }
      if (data.isBack) {
        this.isBack = !data.isBack
      }
      if (data.bgColor) {
        this.bgColor = data.bgColor
      }
      if (data.bgOpacity) {
        this.bgOpacity = data.bgOpacity
      }
    },
    // 回退
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.mint-header-title {
  letter-spacing: 12px;
  font-weight: 700;
  font-size: 16px;
}
</style>
