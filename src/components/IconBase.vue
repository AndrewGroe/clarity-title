
// https://github.com/sdras/vue-sample-svg-icons/blob/master/src/components/IconBase.vue#L1

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{iconName}} icon</title>
    <g :fill="iconColor">

      <component
        width="100%"
        height="100%"
        :is="icon"
      ></component>

    </g>
  </svg>
</template>

<script>

import IconBuilding from '../components/icons/IconBuilding'
import IconCar from '../components/icons/IconCar'
import IconMoon from '../components/icons/IconMoon'
import IconCalendarChecked from '../components/icons/IconCalendarChecked'
import IconDocuments from '../components/icons/IconDocuments'
import IconEditDocument from '../components/icons/IconEditDocument'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { IconBuilding, IconCar, IconMoon, IconCalendarChecked, IconDocuments, IconEditDocument },
  props: {
    icon: {
      type: String
    },
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }

}
</script>

<style scoped>
svg {
  display: block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
