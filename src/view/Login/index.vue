<template lang="html">
  <div class="index">
      <v-header class="header">
      <h1 slot="title">登录</h1>
    </v-header>
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Footer from '@/common/_footer.vue'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>
