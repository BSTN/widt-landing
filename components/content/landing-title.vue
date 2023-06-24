<template>
  <div class="landing-title">
    <SearchBlob></SearchBlob>
    <!-- <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div> -->
    <div class="logo">
      <logo :style="style"></logo>
    </div>
    <div class="text">
      <slot></slot>
    </div>
    <div class="comments">
      <div v-for="comment in comments" class="comment">
        <div class="date">{{ comment.date }}</div>
        <div class="commenttext">{{ comment.text }}</div>
      </div>
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
  background: #d5dbca;
  background: #dbcacf;
  background: #dbcad4;
  background: #dbd3ca;
  background: linear-gradient(#dbd3ca, #dbcad4);
  background-size: 100vw;
  background-attachment: fixed;
  background-position: center;
  padding-top: 4rem;
}

.img {
  position: absolute;
  background: url("@/public/sharppurple.jpg");
  background: url("@/public/sharppurple2.jpg");
  background: url("@/public/sharppurple-xl2.jpg");
  // background: url("@/public/bling2.jpg");
  background-attachment: fixed;
  background-position: right;
  background-size: 100vw;
  border-radius: 1rem;
  width: 8rem;
  height: 50vh;
  left: 70vw;
  top: 4rem;
  box-shadow: inset 0 0 1rem var(--fg);
  &:nth-child(2) {
    left: 30vw;
    top: 20vh;
    height: 5rem;
    width: 5rem;
  }
  &:nth-child(3) {
    left: 30vw;
    top: 50vh;
    height: 1rem;
    width: 20rem;
  }
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
  z-index: 2;
  .commentin();
  // display: none;
  @media (orientation: portrait) {
    @s: 90vw;
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
    transition: all 1s @easeInOutExpo;
    :deep(g:first-child > path) {
      // filter: drop-shadow(0 0 0.5rem #22222299);
    }
  }
}

.text {
  position: relative;
  right: 0;
  bottom: 0;
  width: 28em;
  max-width: 100%;
  margin: 2rem auto;
  padding: 1em 1.5rem 4.25em;
  font-size: 2em;
  line-height: 1.2em;
  z-index: 2;
  @media (max-width: 40rem) {
    font-size: 6vw;
  }
  // color: var(--bg);
  // padding-top: 90vh;
  // padding-top: 10vh;
  :deep(p) {
    width: 100% !important;
    max-width: 100%;
    font-variation-settings: "EXPO" 100;
    transition: all 0.3s;
    .nottop & {
      transition: all 3s;
      font-variation-settings: "EXPO" -30;
    }
    em {
      font-variation-settings: "EXPO" -50;
    }
  }
}

.comments {
  position: relative;
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  display: block;
  // display: none;
  margin-top: 3rem;
  // border-top: 1px solid var(--fg);
  // border-bottom: 1px solid var(--fg);
  font-family: "JetBrains Mono";
  font-weight: 700;
  height: 80vh;
  z-index: 12;
  .comment {
    position: absolute;
    // blue
    color: var(--fg);
    background: var(--bg);
    // text-shadow: 0 0 0.125em #2affaa;
    // colours
    // background: #103b5e;
    // background: #1d2a27;
    // background: #141414;
    // color: #fff7dd;

    font-size: 14px;
    line-height: 1.4em;
    padding: 1em 1.5em 1.5em;
    border-radius: 0 0.25em 0.25em 0.25em;
    width: 23em;
    box-shadow: 0 0.125em 0.5em #2affaa;
    box-shadow: 0 0.125em 0.15em rgba(#222,0.9);
    // box-shadow: 0 0.125em 1em #ffa38f;
    // box-shadow: 0 0.125em 1em var(--bg2);

    opacity: 0.98;
    transition: all 0.3s @easeInOutExpo;
    cursor: pointer;

    .commentin();
    &:nth-child(1) {
      animation-delay: 0.5s;
    }
    &:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) {
      animation-delay: 1.25s;
    }
    &:nth-child(4) {
      animation-delay: 1.75s;
    }
    &:nth-child(5) {
      animation-delay: 2.25s;
    }

    &:hover {
      transform: scale(1.1) !important;
    }
    .date {
      font-size: 0.8em;
      opacity: 0.5;
      margin-bottom: 0.25em;
      // text-align: right;
      display: none;
    }
    &:nth-child(1) {
      right: 5vw;
      top: 10%;
    }
    &:nth-child(2) {
      left: 10vw;
      top: 4rem;
      // background: #18212b;
    }
    &:nth-child(3) {
      right: 10vw;
      top: 70%;
      // background: #23182b;
    }
    &:nth-child(4) {
      left: 80vw;
      top: 180%;
      // background: #5f3248;
    }
    &:nth-child(5) {
      left: 5%;
      top: 80%;
      // background: #5f3248;
    }
  }
}
</style>
