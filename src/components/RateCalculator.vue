<template>
  <div class="flex items-center justify-center">
    <div class="lg:flex lg:p-10 justify-between p-4">

      <div class="input p-6 rounded text-white bg-Green-primary">
        <!-- Price Input -->
        <label for="price-input">Purchase Price</label>
        <br>

        <money
          class="text-black"
          v-model="purchasePrice"
          id="price-input"
        ></money>

      </div>

      <div class="output bg-Green-light p-6 rounded">
        <!-- DocStamp Output -->
        <label
          class="text-Green-dark"
          for="documentary-stamp"
        >Doc Stamp: </label>
        <span class="text-white">{{calculateDocStamp.toLocaleString(undefined, {
        style: 'currency', currency: 'USD'})}}</span>

        <br>
        <!-- Title Insurance Output -->
        <label
          class="text-Green-dark"
          for="title-insurance"
        >Title Insurance: </label>
        <span class="text-white">{{calculateTitleInsurance.toLocaleString(undefined, {
        style: 'currency', currency: 'USD'})}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      purchasePrice: ''
    }
  },
  computed: {
    calculateDocStamp () {
      let docStampResult
      if (this.purchasePrice >= 10000) {
        docStampResult = (this.purchasePrice * 0.0070)
      } else {
        docStampResult = ''
      }
      return docStampResult
    },
    calculateTitleInsurance () {
      let price = this.purchasePrice
      let titleInsuranceResult = 0
      if (price >= 10000) {
        if (price <= 100000) {
          titleInsuranceResult = (price * 0.00575)
        } else if (price > 100000 && price <= 1000000) {
          price -= 100000
          titleInsuranceResult = (price * 0.00500) + 575
        } else if (price > 1000000) {
          price -= 1000000
          titleInsuranceResult = (price * 0.00250) + 5075
        }
      } else {
        titleInsuranceResult = ''
      }
      return titleInsuranceResult
    }
  }
}
</script>

<style scoped>
.input,
.output {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
}
</style>
