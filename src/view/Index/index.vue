<template lang="html">
  <div class="index">
    <v-appraisalbar ref="personBar"/>
    <v-swipe :data=bannerList></v-swipe>
    <v-footer/>
  </div>
</template>

<script>
import Appraisalbar from './components/appraisalbar.vue'
import Swipe from './components/swipe.vue'
import Footer from '@/common/_footer.vue'
import { HomeBanner, HomePage } from '@/http/apiInterface'

export default {
  name: 'index',
  data () {
    return {
      data: [],
      bannerList: []
    }
  },
  components: {
    'v-appraisalbar': Appraisalbar,
    'v-swipe': Swipe,
    'v-footer': Footer
  },
  mounted () {
    this.$refs.personBar.discoverFun({
      title: '首页',
      isHome: true,
      isBack: true
    })
  },
  created () {
    HomeBanner().then(response => {
      var res = response.data
      if (res.code === '1') {
        this.bannerList = res.data
      }
    })

    HomePage().then(response => {
      var res = response.data
      if (res.code === '1') {
        this.data = res.data
      }
    })
  }
}
</script>
