<template lang="html">
  <div class="index">
    <v-header/>
    <v-footer/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from '@/common/_footer.vue'

export default {
	components: {
		'v-header': Header,
		'v-footer': Footer
	}
}
</script>