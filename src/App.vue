<template>
  <div
    id="app"
    class="relative"
  >

    <NavBar
      v-if="homePageCheck"
      :backgroundColor="transparent"
      class="absolute w-full"
    />
    <NavBar v-else />

    <div id="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>

    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

import ScrollAnimation from '@/directives/scrollanimation'
export default {
  components: {
    Footer,
    NavBar
  },

  directives: {
    scrollanimation: ScrollAnimation
  },
  data () {
    return {}
  },
  computed: {
    homePageCheck () {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Main Logo Font */
@import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
.font-logo {
  font-family: "Dancing Script", cursive;
}

/* Hero Text Font */

@import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
.font-hero {
  font-family: "Questrial", sans-serif;
}

html {
  scroll-behavior: smooth;
  height: 100%;
}
body {
  overflow: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
}
#content {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
}

.before-enter {
  opacity: 0;
  transform: scale(0.8);
  transition: all 1000ms ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1);
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
  opacity: 0;
}
</style>
