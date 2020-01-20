<template>
  <div class="block px-2">
    <div class="m-2">
      <div
        class="flex bg-Green-primary rounded items-center cursor-pointer shadow-lg"
        @click="isOpen = !isOpen"
      >
        <div class="toggle px-2">
          <div
            class="arrow h-3 w-3"
            :class="isOpen ? 'open' : ''"
          ></div>
        </div>
        <h2 class="text-2xl text-white">{{item.title}}</h2>
      </div>

      <div
        class="bg-Mint rounded-b text-center shadow-lg"
        :class="isOpen ? 'block opening' : 'hidden closing'"
      >
        <p class="py-6 text-lg font-semibold px-2">{{item.text}}</p>

        <div class="flex justify-center">

          <div
            class="font-bold text-xl pb-2"
            v-if="item.note"
          >{{item.note}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.arrow {
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transition: all 0.4s ease-in-out;
  transform: rotate(-45deg);
}
.arrow.open {
  transform: rotate(-225deg);
}
</style>
