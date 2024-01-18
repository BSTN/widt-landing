<template>
  <div class="landing-title">
    <SearchBlob></SearchBlob>
    <div class="logo">
      <logo :style="style"></logo>
    </div>
    <LandingComments></LandingComments>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import logo from "@/assets/vector/logo-diamond.svg?component";
// import logo from "@/assets/vector/logo-cutout.svg?component";
import comments from "@/content/comments.yml";
import { useMouse } from "@vueuse/core";
const { x, y } = useMouse();
const style = computed(() => {
  const xx = x.value / 1700;
  return {
    transform: `rotateZ(${(xx - 0.5) * 0}deg) rotateY(${
      xx < 0.5 ? 0 : 360
    }deg)`,
  };
});
</script>
<style lang="less" scoped>
.landing-title {
  position: relative;
  display: block;
  background: linear-gradient(var(--lbg1), var(--lbg2));
  background-size: 100vw;
  background-attachment: fixed;
  background-position: center;
  padding-top: 4rem;
  cursor: none;

  z-index: 0;
}

.logo {
  position: relative;
  top: 0;
  font-size: 0;
  @s: 80vh;
  left: calc(50% - @s / 2);
  width: @s;
  height: @s;
  overflow: visible;
  z-index: 10;
  .logoin();
  @media (orientation: portrait) {
    @s: 60vw;
    left: calc(50% - @s / 2);
    width: @s;
    height: @s;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 3s @easeInOutExpo;
    :deep(g:first-child > path) {
      // filter: drop-shadow(0 0 0.5rem #22222299);
    }
  }
  @media (max-width: 60rem) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}

.text {
  position: relative;
  right: 0;
  bottom: 0;
  width: 28em;
  max-width: 100%;
  margin: 2rem auto 0;
  padding: 6em 1.5rem 6em;
  font-size: 2em;
  font-size: 1.5em;
  line-height: 1.4em;
  z-index: 2;
  @media (max-width: 40rem) {
    font-size: 1rem;
    :deep(p) {
      line-height: 1.4em !important;
    }
  }
  // color: var(--bg);
  // padding-top: 90vh;
  // padding-top: 10vh;
  :deep(p) {
    width: 100% !important;
    max-width: 100%;
    font-variation-settings: "EXPO" 100;
    transition: all 0.3s;
    line-height: 1.8em;

    .nottop & {
      transition: all 3s;
      font-variation-settings: "EXPO" -30;
    }
    em {
      font-variation-settings: "EXPO" -50;
    }
  }
  @media (max-width: 60rem) {
    padding: 2em 1em;
    margin: 0;
  }
}
</style>
