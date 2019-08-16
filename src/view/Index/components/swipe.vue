<template>
  <div class="mint-swipe">
    <mt-swipe :auto="4000">
      <template v-for="(item,index) in data">
        <mt-swipe-item :key="index"
                       v-if="item.is_show !==1">
          <router-link :to="'http://www.kuangjiahu.top/public/static/image/'+item.img">
            <img :src="'http://www.kuangjiahu.top/public/static/image/'+item.img">
          </router-link>
        </mt-swipe-item>
      </template>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  name: 'swipe',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scope>
.mint-swipe {
  height: 200px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
