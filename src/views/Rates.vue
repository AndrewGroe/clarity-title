<template>
  <div class="rates">

    <h1 class="text-2xl mx-4">Rates</h1>
    <div class="rate-calc">
      <RateCalculator />
    </div>
  </div>
</template>

<script>

import RateCalculator from '@/components/RateCalculator.vue'
export default {
  name: 'rates',
  components: {

    RateCalculator
  }
}
</script>
