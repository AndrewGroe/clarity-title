<template>
  <div :class="backgroundColor">
    <header class="sticky top-0 md:flex md:justify-between z-10">

      <div class="flex items-center justify-between px-4 py-3">
        <router-link to="/">
          <div class="logo flex items-start">
          <img
            src="@/assets/logo.png"
            class=" logo-image sm:h-16 sm:w-16 w-12 h-12"
          />
          <h1 class="h-8 px-4 sm:text-5xl text-4xl text-white font-logo align-middle">Clarity Title</h1>
        </div>
        </router-link>

        <div class="md:hidden">
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
        :class="[backgroundColor, isOpen ? 'block' : 'hidden']"
        class="px-2 pt-2 pb-4 rounded-b md:flex md:items-center md:pb-1 md:bg-transparent bg-Green-primary md:rounded-none absolute md:relative right-0 text-white"
      >
        <router-link
          class="link block lg:mx-4 md:mx-2"
          v-for="link in routes"
          :key="link.id"
          :to="link.path"
        >
          {{link.text}}
          <div class="underline"></div>
        </router-link>

        <router-link to="/rates">
          <button class="cto-btn mx-auto px-2 mt-2 md:ml-8 border-2 border-Mint rounded text-lg font-semibold tracking-tighter">
            <span class="md:mx-2">Get A Quote</span>

          </button>
        </router-link>
      </div>
    </header>

  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    backgroundColor: {
      type: String,
      default: 'bg-Green-primary'
    }
  },
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
.logo-image {
        filter: invert(100%);
        -webkit-filter: invert(100%);
}

.link.router-link-exact-active {
  font-weight: 500;

  color: black;
  transition: all 0.4s ease-in-out;
}

.link.router-link-exact-active > .underline {
  background-position: left bottom;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
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

.underline {
  border-radius: 4px;
  height: 4px;
  background-size: 210% 100%;
  background-position: right bottom;
  transition: all 720ms ease;
  background-image: linear-gradient(to right, #c3efbe 50%, #fafafa 50%);
}

.link:hover > .underline {
  background-position: left bottom;
  border: 1px solid #000;
}

.cto-btn {
  background-size: 210% 100%;
  background-position: right bottom;
  transition: all 720ms ease;
  background-image: linear-gradient(to right, #c3efbe 50%, #fafafa00 50%);
}

.cto-btn:hover {
  color: black;
  background-position: left bottom;
}
</style>
