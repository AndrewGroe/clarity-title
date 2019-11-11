<template>
  <div class="navbar">
    <header class=" sm:flex sm:justify-between bg-Green-primary">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="logo flex">
          <img
            src="@/assets/logo.png"
            class="h-12 w-12"
          />
          <h1 class="h-8 px-1 text-4xl text-white">Clarity Title</h1>
        </div>

        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            class="block focus:outline-none focus:shadow"
          >
            <div
              class="nav-icon"
              :class="isOpen ? 'open' : ''"
            >
              <div></div>
            </div>
          </button>
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="px-2 pt-2 pb-4 sm:flex sm:items-end sm:pb-0"
      >
        <router-link
          class="block px-2 text-white font-semibold rounded-t hover:bg-Mint hover:text-black sm:pb-3"
          v-for="link in routes"
          :key="link.id"
          :to="link.path"
        >{{link.text}}</router-link>
      </div>
    </header>

  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data () {
    return {
      isOpen: false,
      routes: [
        {
          text: 'Home',
          path: '/'
        },
        {
          text: 'Rates',
          path: '/rates'
        },
        {
          text: 'About',
          path: '/about'
        },
        {
          text: 'FAQ',
          path: '/faq'
        }

      ]
    }
  }
}
</script>

<style scoped>
a .router-link-exact-active {
  background-color: black;
}

/* Animated Hamburger Icon */
.nav-icon {
  width: 40px;
}
.nav-icon:after,
.nav-icon:before,
.nav-icon div {
  background-color: #fff;
  border-radius: 3px;
  content: "";
  display: block;
  height: 5px;
  margin: 7px;
  transition: all 0.4s ease-in-out;
}
.nav-icon.open:before {
  transform: translateY(12px) rotate(135deg);
}
.nav-icon.open:after {
  transform: translateY(-12px) rotate(-135deg);
}
.nav-icon.open div {
  transform: scale(0);
}
</style>
