<template>
  <div class="comments">
    <div
      v-for="(comment, k) in comments"
      class="comment"
      :class="{ active: k === Math.floor(active) || k === Math.floor(active2) }"
    >
      <div class="commenttext">{{ comment }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import comments from "@/content/comments.yml";
const active = ref(0);
const active2 = ref(1.5);
const interval = setInterval(() => {
  active.value = (active.value + 1.5) % (comments.length - 1);
  active2.value = (active2.value + 1.5) % (comments.length - 1);
}, 2000);
</script>
<style lang="less" scoped>
.comments {
  position: relative;
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  display: block;
  margin-top: 3rem;
  font-family: "jetbrainsmono";
  line-height: 1.3em;
  font-weight: 500;
  height: calc(80vh + 2rem);
  z-index: 2;
  opacity: 0;
  .fadein();

  // --bg: #2e2e2e;
  // --fg: #eee;
  --opacity: 0.9;
  @media (max-width: 60rem) {
    position: relative;
    height: auto;
    .comment {
      position: relative;
    }
  }
  .comment {
    position: absolute;
    color: var(--fg);
    background: var(--bg);
    // text-shadow: 0 0 0.125em #2affaa;
    // colours
    // background: #103b5e;
    // background: #1d2a27;
    // background: #141414;
    // color: #cb4a93;

    font-size: 14px;
    line-height: 1.4em;
    padding: 1em 1.5em 1.5em;
    border-radius: 0 0.5em 0.5em 0.5em;
    width: 23em;
    // box-shadow: 0 0.125em 0.15em #77ff80;
    // box-shadow: 0 0.125em 0.15em rgba(#222, 0.9);
    // box-shadow: 0 0.125em 1em #ffa38f;
    // box-shadow: 0 0.125em 1em var(--bg2);

    transition: all 1s @easeInOutExpo;
    cursor: pointer;

    opacity: 0;
    transform: scale(0.25);
    pointer-events: none;

    &:before {
      content: "";
      position: absolute;
      left: calc(-0.5rem + 1px);
      top: 0rem;
      width: 0.5rem;
      height: 0.5rem;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%);
      background: var(--bg);
    }
    &.active {
      opacity: var(--opacity);
      transform: scale(1);
      pointer-events: auto;
    }
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
      transform: scale(1.2) !important;
      transition-duration: 0.2s;
      pointer-events: auto;
      opacity: var(--opacity);
    }
    &:nth-child(4n + 1) {
      right: 5vw;
      top: 10%;
    }
    &:nth-child(4n + 2) {
      left: 10vw;
      top: 4rem;
      // background: #18212b;
    }
    &:nth-child(4n + 3) {
      right: 10vw;
      top: 70%;
      // background: #23182b;
    }
    &:nth-child(4n + 4) {
      left: 10vw;
      top: 80%;
      // background: #5f3248;
    }
  }
}
</style>
