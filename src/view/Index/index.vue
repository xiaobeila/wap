<template lang="html">
  <div class="index">
    <v-appraisalbar ref="personBar"/>
    <v-swipe></v-swipe>
    <v-footer/>
  </div>
</template>

<script>
import Appraisalbar from './components/appraisalbar.vue'
import Swipe from './components/swipe.vue'
import Footer from '@/common/_footer.vue'

export default {
  components: {
    'v-appraisalbar': Appraisalbar,
    'v-swipe': Swipe,
    'v-footer': Footer
  },
  mounted () {
    this.$refs.personBar.discoverFun({ title: '首页', isHome: true, isBack: true })
  }
}
</script>
