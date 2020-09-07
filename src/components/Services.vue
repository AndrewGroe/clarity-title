<template>
  <section
    id="services"
    class="bg-Mint text-center text-black"
  >
    <h1 class="text-2xl mx-4">Services</h1>
    <div class="cards py-1 sm:flex sm:flex-wrap">
      <div
        v-scrollanimation
        v-for="service in services"
        :key="service.id"
        class="bg-white rounded m-4 w-64 h-128 shadow-lg border-Green-primary border-4  mx-auto"
      >
        <span class="text-xl p-2">{{service.title}}</span>
        <icon-base
          class="mx-auto mt-2"
          width="64px"
          height="64px"
          :icon="service.icon"
        />
        <p class="p-4">{{service.text}}</p>

      </div>
    </div>
  </section>
</template>

<script>
import IconBase from '../components/IconBase'
import ScrollAnimation from '../directives/scrollanimation'

export default {
  components: {
    IconBase
  },
  directives: {
    scrollanimation: ScrollAnimation
  },
  data () {
    return {
      services: [
        {
          title: 'In-House',
          text: 'Onsite closings at our office offer a convenient meeting place for all involved parties.',
          icon: 'icon-building'
        },
        {
          title: 'Mobile',
          text: 'Sometimes things come up, so we\'ll come to you in the event you can\'t make it to our office.',
          icon: 'icon-car'
        },
        {
          title: 'After Hours',
          text: 'Flexible scheduling ensures maximum convenience.',
          icon: 'icon-moon'
        },
        {
          title: 'Weekends',
          text: 'If you require further flexibility, weekend closings may be arranged. Given prior notice of course.',
          icon: 'icon-calendar-checked'
        },
        {
          title: 'Consultation',
          text: 'We can help explain documents to avoid confusion should you desire.',
          icon: 'icon-documents'
        },
        {
          title: 'Notary Services',
          text: 'We also offer notary services for your convenience.',
          icon: 'icon-edit-document'
        }

      ]
    }
  }
}
</script>

<style scoped>
.before-enter {
  opacity: 0;
  transform: scale(0.8);
  transition: all 1000ms ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1);
}
</style>
