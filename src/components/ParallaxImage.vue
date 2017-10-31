<template>
  <div class="parallax-image" ref="wrapper" :style="{height: this.height+'px' }" >
    <img class="parallax-image__bg" ref="image" :src="this.fullImagePath" :style="this.parallaxImageStyle" >
  </div>
</template>

<script>
  import Parallax from 'vue-parallaxy';
  import {TimelineLite} from "gsap"

  export default {
    name: 'parallax-image',
    data: function() {
      return {
        totalScroll: 0,
        closestPortfolio: null,
        imageTop: 0,
        isEntered: false,
      }
    },
    props: {
      image: {
        type: [String],
        required: true
      },
      height: {
      type: [Number],
        required: true
      }
    },

    computed: {
      fullImagePath: function () {
        return (this.image) ? require('../assets/img/' + this.image) : '';
      },
      parallaxImageStyle: function() {
          return 'transform: translateY('+this.imageTop+'px)';
      },
    },
    mounted: function() {
      this.closestPortfolio = this.closest(this.$refs.image, '.project');
      this.closestPortfolio.addEventListener('scroll', this.checkParallaxOut);
    },
    methods: {
      checkParallaxOut: function() {
          let multiplier = 0.5,
            wrapperHeight = this.$refs.wrapper.offsetHeight * (1 + multiplier),
            centerPosition = -wrapperHeight / 2,
            newTopPercentage = -50,
            newIsEntered = false;


          if (this.closestPortfolio.scrollTop >= this.$refs.wrapper.offsetTop - this.$refs.wrapper.offsetHeight) {
            newTopPercentage = ( (100 * ((this.closestPortfolio.scrollTop + this.$refs.wrapper.offsetHeight) - this.$refs.wrapper.offsetTop) ) / document.querySelector('html').clientHeight );
            newTopPercentage -= 50;
            newIsEntered = true;
          } else {
            newIsEntered = false;
          }


        if (!this.isEntered && newIsEntered) {
          let tween = new TimelineLite({});
          tween.fromTo(this.$refs.wrapper, 0.6, {scale: "1.1", y: 50}, {scale: "1", y: 0} );
          this.isEntered = true;
        } else if (this.isEntered && !newIsEntered) {
          this.isEntered = false;
        }

        this.imageTop = centerPosition - ((wrapperHeight * newTopPercentage * multiplier) / 100);
      },

      closest: function(el, selector) {
        var matchesFn;

        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
          if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
          }
          return false;
        })

        var parent;

        // traverse parents
        while (el) {
          parent = el.parentElement;
          if (parent && parent[matchesFn](selector)) {
            return parent;
          }
          el = parent;
        }

        return null;
      }
    },
    components: {
        Parallax
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .parallax-image {
    position: relative;
    overflow: hidden;
  }

  .parallax-image__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
</style>
