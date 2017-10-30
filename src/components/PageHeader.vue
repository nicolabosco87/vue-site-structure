<template>
  <div class="header__links">
    <router-link class="header__site" to="/">SITE NAME</router-link>
    <!--<router-link class="header__back" to="#">BACK</router-link>-->
    <router-link class="header__credits" to="/credits">CREDITS</router-link>
  </div>
</template>

<script>
export default {
  name: 'page-header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .header__links {
    position: relative;
    z-index: 10;

    > * {
      color: #ffffff;
      text-decoration: none;

      &:hover {
        color: white;
      }
    }
  }

  .header__site {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 10;
  }

  .header__back {
    position: fixed;
    z-index: 10;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .header__credits {
    position: fixed;
    z-index: 10;
    top: 20px;
    right: 20px;
  }
</style>
