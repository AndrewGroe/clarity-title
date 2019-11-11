<template>
  <div class="about">
    <h1 class="text-2xl mx-4">FAQ</h1>
    <FAQItem
      v-for="item in FAQs"
      :key="item.id"
      :item=item
    />
  </div>
</template>
<script>
import FAQItem from '@/components/FAQItem'
export default {
  components: {
    FAQItem
  },
  data () {
    return {
      FAQs: [
        {
          title: 'What is title?',
          text: 'When you buy a home, you receive title to the property, meaning you are now the full legal owner of that property.'
        },
        {
          title: 'What is title insurance?',
          text: 'Title insurance for real estate provides protection against loss if a covered defect is found in the title to real property.',
          note: 'Having title insurance can save you time, money, and even your home.'
        },
        {
          title: 'How does title insurance protect me?',
          text: 'Title insurance usually covers four types of "hidden" risks: errors, liens, ownership claims, and invalid deeds. If a claim is made against your property, the title insurance company will negotiate with the other party to settle the claim, defend you in court if necessary, pay any incurred legal costs, and satisfy any covered claims.'
        }
      ]
    }
  }
}
</script>
