<template>
  <div class="searchblob">
    <div
      class="image"
      :style="{ clipPath: `circle(${r}px at ${x}px ${maxy}px)` }"
    ></div>
    <div
      class="shadow"
      :style="{
        transform: `translate(${x}px,${maxy}px)`,
        width: `${r * 2}px`,
        height: `${r * 2}px`,
        left: `${r * -1}px`,
        top: `${r * -1}px`,
      }"
    ></div>
    <!-- <div class="blob" :style="{ transform: `translate(${x}px, ${y}px)` }"></div> -->
  </div>
</template>
<script lang="ts" setup>
import { useMouse } from "@vueuse/core";
const size = 200;
const clip = 120;
const { x, y } = useMouse();
const maxy = computed(() => (y.value < 0 ? 0 : y.value));
let prevx = 0;
let prevy = 0;
const delta = computed(() => {
  const val = (Math.abs(x.value - prevx) + Math.abs(y.value - prevy)) / 2;
  prevx = x.value;
  prevy = y.value;
  return val;
});
function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}
const r = computed(() => {
  if (y.value < clip) {
    return Math.log(clamp(y.value - clip / 2, 0, 2000) / clip + 1) * size;
  }
  return size / 2;
});
</script>
<style lang="less" scoped>
.searchblob {
  pointer-events: none;
}
.image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--bgimg);
  z-index: 1;
  background-size: 100vw;
}
.shadow {
  position: absolute;
  left: -100px;
  top: -100px;
  width: 200px;
  height: 200px;
  box-shadow: inset 0 0 1rem #000;
  border-radius: 100%;
  z-index: 1;
}
</style>
