<template>
  <div id="app">
    <router-view></router-view>
    <v-loading v-show="fetchLoading"></v-loading>
  </div>
</template>

<script>
import Loading from '@/common/_loading'
export default {
  name: 'App',
  components: {
    'v-loading': Loading
  },
  computed: {
    fetchLoading () {
      return this.$store.state.fetchLoading
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/reset.css";
</style>
