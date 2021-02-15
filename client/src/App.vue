<template>
  <div id="app">
    <TopNavbar />
    <router-view/>
  </div>
</template>

<script>
import TopNavbar from '@/components/navigation/TopNavbar'

export default {
  components: {
    TopNavbar
  }
}
</script>

<style lang="scss">
@import './styles/buefy.scss';
</style>
