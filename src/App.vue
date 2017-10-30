<template>
  <div id="app">
    <PageHeader></PageHeader>
    <main>
      <div class="page-transition-loader">
        <svg viewBox="0 0 24 24">
          <path fill="#ffffff" d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z" />
        </svg>
      </div>
      <transition name="fade" v-on:enter="enter" >
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader.vue'
  import {TweenMaxLite, Power2, TimelineLite} from "gsap"
  import CustomEase from  './lib/gsap/CustomEase'

  require('../node_modules/normalize.css/normalize.css')
  require('./assets/sass/global.scss')

export default {
  name: 'app',
  components: {
    PageHeader
  },

  methods: {

      enter: function(el, done) {
          let pageTransitionLoader = document.querySelector('.page-transition-loader'),
            pageTransitionLoaderLogo = document.querySelector('.page-transition-loader svg'),
            tl = new TimelineLite({
              onComplete: done,
              ease: CustomEase.create("custom", "M0,0 C0.13,0.127 0.5,-0.054 0.5,0.5 0.5,0.996 0.861,0.858 1,1")
            }),
            duration = 0.8;

          tl.fromTo(pageTransitionLoader, duration, {left: '100%'}, {left: '0%'});
          tl.to(pageTransitionLoader, duration, {left: '-100%'}, 2);

          tl.fromTo(pageTransitionLoaderLogo, (duration - 0.2), {opacity: 0}, {opacity: 0}, 0);
          tl.fromTo(pageTransitionLoaderLogo, 1, {opacity: 0, rotation: 0}, {opacity: 1, rotation: 360}, (duration - 0.2));

      },

  }
}
</script>



<style lang="scss" >
  .fade-enter-active, .fade-leave-active {
    transition: all;
    transition-duration: 0s;
    transition-delay: 1s;
    z-index: 5;
  }

  .fade-enter-active {
    transition-delay: 1s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }


  .page-transition-loader {
    position: absolute;
    z-index: 9;
    background: #000;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
    }
  }

  main {
    overflow-x: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
  }

</style>
