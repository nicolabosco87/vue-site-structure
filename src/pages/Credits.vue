<template>
  <div class="credits">

    <h2 class="credits__label">
      Site structure by Nicola Bosco
    </h2>

  </div>
</template>

<script>


export default {
  name: 'credits',

  data: function() {
    return {
    }
  },

  created: function() {},

  mounted: function() {},

  methods: {

  },


  components: {
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

    h2 {
      color: white;
    }
  }


</style>
