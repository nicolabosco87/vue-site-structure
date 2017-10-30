<template>
  <div id="app">
    <PageHeader></PageHeader>
    <main>
      <div class="page-transition-loader">
        <div class="page-transition-loader__bg"></div>
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
            pageTransitionLoaderBg = document.querySelector('.page-transition-loader__bg'),
            tl = new TimelineLite({
              onComplete: done,
              ease: CustomEase.create("custom", "M0,0 C0.13,0.127 0.5,-0.054 0.5,0.5 0.5,0.996 0.861,0.858 1,1")
            }),
            duration = 0.8;

          // Transition block animation
          tl.fromTo(pageTransitionLoader, duration, {left: '100%'}, {left: '0%'});
          tl.to(pageTransitionLoader, duration, {left: '-100%'}, 2);

          // White bg animation
          tl.fromTo(pageTransitionLoaderBg, duration/3, {left: 0, right: 'auto', width: '0%'}, {width: '30%'}, 0);
          tl.to(pageTransitionLoaderBg, duration/3, {width: '0%'}, 0.5);
          tl.to(pageTransitionLoaderBg, 0, {left: 'auto', right: 0, width: '0%'}, 1.8);
          tl.to(pageTransitionLoaderBg, duration/3, {width: '30%'}, 2);
          tl.to(pageTransitionLoaderBg, duration/3, {width: '0%'}, 2 + (duration/3));

          // Transition Logo animation
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

    .page-transition-loader__bg {
      position: absolute;
      height: 100%;
      width: 0%;
      top: 0;
      left: 0;
      background: #ffffff;
    }

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
