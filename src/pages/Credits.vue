<template>
  <div class="credits">

    <SplitTitle class="credits__label" title="Site structure by Nicola Bosco" ></SplitTitle>

  </div>
</template>

<script>
import DefaultPage from './DefaultPage.vue'
import SplitTitle from '../components/SplitTitle.vue';

export default {
  name: 'credits',
  extends: [DefaultPage],

  data: function() {
    return {
    }
  },

  created: function() {},

  mounted: function() {},

  methods: {

  },


  components: {
    SplitTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >

  .credits {
    padding: 60px 30px;
    background-image: url(../assets/img/norway.jpg);
    height: 100vh;
    color: white;

    h1 {
      margin-top: 50px;
      color: white;
    }
  }


</style>
