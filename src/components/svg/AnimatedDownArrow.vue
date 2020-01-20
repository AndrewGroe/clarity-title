<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 28"
  >

    <title>
      down_arrow
    </title>
    <g
      id="Layer_2"
      data-name="Layer 2"
    >
      <g id="down_arrow">
        <polyline
          id="arrow_lg"
          class="cls-1"
          points="0.5 0.5 27.5 27.5 53.5 0.5"
        />
        <polyline
          id="arrow_sm"
          class="cls-1"
          points="36 9 27.26 18.5 18 9"
        />
      </g>
    </g>
  </svg>

</template>

<script>
export default {

}
</script>

<style>
.cls-1 {
  fill: none;
  stroke: rgb(255, 255, 255);
  stroke-linecap: round;
  stroke-linejoin: round;
}
#arrow_sm {
  animation: bounce 3s infinite linear;
}
@keyframes bounce {
  0% {
    stroke: #fff;
    transform: translateY(0);
  }
  50% {
    stroke: #c3efbe;
    transform: translateY(-3px);
  }
  100% {
    stroke: #fff;
    transform: translateY(0);
  }
}
</style>
