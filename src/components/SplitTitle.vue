<template>
  <h1 ref="title" @do-animations="startAnimation">{{this.title}}</h1>
</template>

<script>
  import Vue from 'vue'
  import {TweenMax, TimelineLite, Power4} from "gsap"
  import SplitType from "typesplit"
  import CustomEase from  '../lib/gsap/CustomEase'

  export default {
    name: 'split-title',
    data: function() {
      return {
          instance: ""
      }
    },
    props: {
      title: {
        type: [String],
        required: true
      },
    },

    computed: {},
    mounted: function() {
      this.instance = new window.SplitType(this.$refs.title);
      this.instance.split({
        split: 'chars',
        position: 'absolute'
      });

      this.$bus.$on('init-page-transition-animations', this.startAnimation);
    },
    methods: {

        startAnimation: function(doAnimations) {

          if (this.$refs.title) {
            let tween = new TimelineLite(), delay = 0;
            tween.to(this.$refs.title, 0, {opacity: 1}, 0);

            this.instance.chars.forEach(function (c) {
              tween.from(c, 1, {opacity: 0 }, delay * 0.02);
              tween.from(c, 1, {x: 100, ease: CustomEase.create("custom", "M0,0,C0,0,0.5,0,0.5,0.5,0.5,1,1,1,1,1") }, delay * 0.01);
              delay+= 1;
            });
          }

        }

    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    opacity: 0;
  }
</style>
