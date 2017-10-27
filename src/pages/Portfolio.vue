<template>
  <div class="portfolio">

    <Project :info="item" :opened="activeProjectInfo == item"
             :openProjectInfo="openProjectInfo" :closeProjectInfo="closeProjectInfo"
             v-for="item in projects" :style="{ 'z-index': calculateZIndex(item)  }" :id="'project-'+item.id" ></Project>

  </div>
</template>

<script>

import {TweenMax, TweenLite, Power2, TimelineLite} from "gsap"
//import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import ScrollToPlugin from "../../node_modules/gsap/ScrollToPlugin";

import projects from '../../static/projects.json'
import Project from '../components/Project.vue'

const VueScrollTo = require('vue-scrollto');
const TIMER = 5000;

export default {
  name: 'portfolio',

  data: function() {
    return {
      timer: null,
      projects: [],
      activeProjectInfo: null,
    }
  },

  created: function() {
    this.projects = this.prepareProjects();
  },

  mounted: function() {
    let activeSlideTexts = document.querySelectorAll('.project:first-of-type .text-bar');
    this.setTextsAnimations(activeSlideTexts);
    let nextSlideButtons = document.querySelectorAll('.project:first-of-type .project__btn');
    this.setButtonsAnimations(nextSlideButtons);
    this.startSlide();
  },

  methods: {

    openProjectInfo: function(projectToOpen) {

        this.stopSlide();

        let activeProject;
        this.projects.forEach(function(p) {
          if (p.active === true) activeProject = p;
        });

        if (activeProject !== projectToOpen) {
          this.doSlideAnimation(activeProject, projectToOpen, () => {
            this.activeProjectInfo = projectToOpen;
          });
        } else {
          this.activeProjectInfo = projectToOpen;
        }
    },

    closeProjectInfo: function() {

      TweenLite.to(document.querySelector('.project.project--opened'), 0.6, {
        scrollTo: 0
        });

      this.activeProjectInfo = null;
      this.startSlide();
    },

    calculateZIndex: function(item) {
      if (item.active)
        return 3;
      else if (item.inAnimation)
        return 2;
      else
        return 1;
    },

    startSlide: function() {
      this.timer = setInterval(() => this.doNextSlide(), TIMER);
    },

    stopSlide: function() {
      clearInterval(this.timer);
      this.timer = null;
    },

    prepareProjects: function() {
      let ps = projects.projects;

      ps.forEach(function(value) {
        value.active = false;
        value.inAnimation = false;
      });

      ps[0].active = true;
      ps[0].inAnimation = true;
      return ps;
    },

    doNextSlide: function() {
      let activeProject = false, nextSlide = false;

      this.projects.forEach(function(p) {
        if (nextSlide === true) {
          nextSlide = p;
        }

        if (p.active === true) {
          activeProject = p;
          nextSlide = true;
        }
      });

      if (activeProject == false) {
        activeProject = this.projects[0];
        nextSlide = this.projects[1];
      }
      if (activeProject != false && (nextSlide === false || nextSlide === true)) {
        nextSlide = this.projects[0];
      }

      this.doSlideAnimation(activeProject, nextSlide);
    },


    doSlideAnimation: function(activeSlide, nextSlide, callback = false) {
      activeSlide.active = false;
      nextSlide.active = true;

      activeSlide.inAnimation = true;
      nextSlide.inAnimation = true;

      let currentSlideEl = document.querySelector('#project-'+activeSlide.id);
      let nextSlideEl = document.querySelector('#project-'+nextSlide.id);

      let activeSlideTexts = document.querySelectorAll('#project-'+activeSlide.id+' .text-bar');
      this.removeTextsAnimations(activeSlideTexts);
      let activeSlideButtons = document.querySelectorAll('#project-'+activeSlide.id+' .project__btn');
      this.removeButtonAnimations(activeSlideButtons);

      let tl = new TimelineLite({
        onComplete: function(){
          activeSlide.inAnimation = false;
          nextSlide.inAnimation = false;
        }
      });
      tl.fromTo(currentSlideEl, 0.5, {top: '0%'}, {top: '-100%'}, 0.8 )
        .fromTo(nextSlideEl, 0.5, {top: '100%'}, {top: '0%'}, 0.8 );


      let nextSlideTexts = document.querySelectorAll('#project-'+nextSlide.id+' .text-bar');
      this.setTextsAnimations(nextSlideTexts);
      let nextSlideButtons = document.querySelectorAll('#project-'+nextSlide.id+' .project__btn');
      this.setButtonsAnimations(nextSlideButtons);

      // Call the callback
      if (callback) {
        callback();
      }
    },


    setTextsAnimations: function(nextSlideTexts) {
      if (nextSlideTexts) {
        let delay = 0;
        for (const t of nextSlideTexts) {
          setTimeout(function() {t.classList.add('active')}, 1000 + (delay * 50) );
          delay+=2;
        }
      }
    },

    setButtonsAnimations: function(nextSlideButtons) {
      if (nextSlideButtons) {
        let delay = 0;
        for (const t of nextSlideButtons) {
          setTimeout(function() {t.classList.add('active')}, 2000 + (delay * 50) );
          delay+=2;
        }
      }
    },

    removeTextsAnimations: function(texts) {
      if (texts) {
        let delay = 0;
        for (const t of texts) {
          setTimeout(function() {t.classList.remove('active')}, 0 + (delay * 50) );
          delay+=2;
        }
      }
    },

    removeButtonAnimations: function(buttons) {
      if (buttons) {
        let delay = 0;
        for (const t of buttons) {
          setTimeout(function() {t.classList.remove('active')}, 0 + (delay * 50) );
          delay+=2;
        }
      }
    }

  },


  components: {
    Project
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

  .portfolio {
    position: absolute;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    width: 100%;
    top: 0;
    left: 0;
  }


</style>
