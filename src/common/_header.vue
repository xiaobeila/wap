<template>
  <header>
    <router-link
      class="icon-go"
      :to="{ name: '首页'}"
      v-if="$route.matched[0].path=='/category'"
    ></router-link>
    <span
      class="icon-go"
      @click="$router.go(-1)"
      v-else
    ></span>
    <slot name="title"></slot>
  </header>
</template>

<style lang="less" scoped>
header {
  background-color: #f8fcff;
  text-align: center;
  position: relative;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  .icon-go{
    width: 20px;
    height: 20px;
    background-color: salmon;
  }
  h1 {
    letter-spacing: 0.2vw;
    font-weight: 600;
    margin-right: 36vw;
  }
  span,
  a {
    display: inline-block;
    transform: rotate(-180deg);
    &::before {
      color: #333;
    }
  }
}
</style>

<script>
export default {}
</script>
