<template>
  <div :class="projectClasses" >

    <div class="project-header" :style="{'background-image': 'url(' + fullImagePath + ')'}" >
        <h1 class="text-bar" :data-active="info.active" >{{ info.name }}</h1>
        <h2 class="text-bar" >{{ info.description }}</h2>

        <button v-show="!opened" v-on:click="openProjectInfo(info)" class="btn project__btn">Show more</button>
    </div>


    <div class="project-info">
      <p>The description of {{ info.name }}.</p>

      <button class="btn" v-on:click="closeProjectInfo()" >Return to sites</button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'project',
  props: ['info', 'openProjectInfo', 'closeProjectInfo', 'opened'],

  created: function() {},

  computed: {
    fullImagePath: function() {
      return (this.info) ? require('../assets/img/project/' + this.info.headerBg) : '';
    },

    projectClasses: function() {
        return (this.opened) ? 'project project--opened' : 'project';
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >

  .project {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow: hidden;

    h1 {
      position: absolute;
      top: 100px;
      font-size: 60px;
      left: 50%;
      transform: translateX(-50%);
      /*color: #fff;*/
      text-align: center;
      z-index: 1;
    }

    h2 {
      position: absolute;
      top: 200px;
      font-size: 40px;
      left: 50%;
      transform: translateX(-50%);
      /*color: #fff;*/
      text-align: center;
      z-index: 1;
    }


    &.project--opened {
      overflow-y: scroll;
      height: auto;
      min-height: 100vh;

      .project-header {
        height: 70%;
      }

      .project-info {
        top: 70%;
      }
    }
  }

  .project-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.8s;
    background-position: center center;
    background-size: cover;
  }

  .project__btn {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-50%, 10px);
    opacity: 0;
    transition: all 0.4s;

    &.active {
      transform: translate(-50%, 0px);
      opacity: 1;
    }
  }


  .project-info {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.8s;
    background: cadetblue;
    padding: 30px;
    box-sizing: border-box;
  }

</style>
