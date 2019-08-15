<template>
  <div class="mint-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img
          src="https://via.placeholder.com/300"
          alt="1"
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://via.placeholder.com/300"
          alt="2"
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://via.placeholder.com/300"
          alt="3"
        />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {

}
</script>

<style lang="less" scope>
.mint-swipe {
  height: 200px;
  text-align: center;
}
</style>
