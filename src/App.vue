<template>
  <div id="app">
    <PageHeader></PageHeader>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader.vue'

  require('../node_modules/normalize.css/normalize.css')
  require('./assets/sass/global.scss')

export default {
  name: 'app',
  components: {
    PageHeader
  },
}
</script>



<style lang="scss" >
</style>
