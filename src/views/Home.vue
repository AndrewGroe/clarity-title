<template>
  <div class="home">

    <div id="bg">
      <img id="picture" />
      <div id="overlay">

        <div class="mt-48 lg:mr-24 lg:float-right">
          <h2 class="text-5xl text-white text-center font-semibold font-hero"><span class="text-Mint tracking-wider">Peace of Mind</span> <br>for your<br>Piece of Home</h2>
        </div>
        <div class="scroll-btn">
          <a href="#services">
            <button class="btn">

              <AnimatedDownArrow class="w-16 h-16" />

            </button></a>

        </div>
      </div>
    </div>
    <Services />

  </div>
</template>

<script>

import Services from '../components/Services'
import AnimatedDownArrow from '../components/svg/AnimatedDownArrow'

export default {
  name: 'home',
  components: {

    AnimatedDownArrow,
    Services
  }
}
</script>

<style scoped>
#bg {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
}

#picture {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}

#overlay {
  position: absolute;
  top: 0;
  left: 0;
  clear: float;
  width: 100%;
  height: 100%;
  background: rgba(0, 134, 60, 0.65);
}

.hero {
  right: 0;
}

.scroll-btn {
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.btn {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
