<template>
  <div id="app">
    <PageHeader></PageHeader>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
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
  .fade-enter-active, .fade-leave-active {
    transition: all;
    transition-duration: .5s;
  }

  .fade-enter-active {
    transition-delay: .5s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: scale(1.03);
  }
</style>
