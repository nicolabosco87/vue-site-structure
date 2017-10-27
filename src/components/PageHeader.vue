<template>
  <div class="header__links">
    <a class="header__site" href="#">SITE NAME</a>
    <a class="header__back" href="#">BACK</a>
    <a class="header__credits" href="#">CREDITS</a>
  </div>
</template>

<script>
export default {
  name: 'page-header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .header__site {
    position: fixed;
    top: 20px;
    left: 20px;
  }

  .header__back {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .header__credits {
    position: fixed;
    top: 20px;
    right: 20px;
  }
</style>