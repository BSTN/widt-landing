<template>
  <div class="searchblob">
    <div
      class="image"
      :style="{ clipPath: `circle(100px at ${x}px ${y}px)` }"
    ></div>
    <div
      class="shadow"
      :style="{ transform: `translate(${x}px,${y}px)` }"
    ></div>
    <!-- <div class="blob" :style="{ transform: `translate(${x}px, ${y}px)` }"></div> -->
  </div>
</template>
<script lang="ts" setup>
import { useMouse } from "@vueuse/core";
const { x, y } = useMouse();
let prevx = 0;
let prevy = 0;
const delta = computed(() => {
  const val = x.value + y.value - (prevx + prevy);
  prevx = x.value;
  prevy = y.value;
  return val;
});
</script>
<style lang="less" scoped>
.searchblob {
}
.image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(@/public/sharppurple.jpg);
  background: url(@/public/blue.jpg);
  // background: url(@/public/shiny.jpg);
  // background: url(@/public/dirt.jpg);
  z-index: 1;
  background-size: 100vw;
  // transition: clip-path 0.5s @easeInOutExpo;
  &:after {
    // content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ffbf00;
    background: #00a282;
    mix-blend-mode: multiply;
    mix-blend-mode: screen;
  }
  // transition: all 2s @easeInOutExpo;
  // background-attachment: fixed;
  // transition: all 0.5s @easeInOutExpo;
}
.shadow {
  position: absolute;
  left: -100px;
  top: -100px;
  width: 200px;
  height: 200px;
  box-shadow: inset 0 0 1rem #222;
  border-radius: 100%;
  z-index: 1;
  // transition: all 2s @easeInOutExpo;
}
// .blob {
//   position: absolute;
//   width: 4rem;
//   height: 4rem;
//   top: -2rem;
//   left: -2rem;
//   border-radius: 100%;
//   // background: #00f url(@/public/yellow.jpg);
//   // background: var(--fg);
//   z-index: 9;
//   background-attachment: fixed;
//   background-size: 10vw;
//   transition: all 0.5s @easeInOutExpo;
//   background: var(--bg);
//   box-shadow: inset 0 0 0.5rem var(--fg);
// }
</style>
