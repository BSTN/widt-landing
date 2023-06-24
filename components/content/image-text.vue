<template>
  <section class="image-text" ref="target" :class="position">
    <div class="row width">
      <div class="image">
        <div class="img">
          <div class="avatar" v-if="type === 'avatar'">
            <img src="/avatar1.png" />
          </div>
        </div>
      </div>
      <div class="text">
        <slot class="text"></slot>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const { type } = defineProps({
  type: {
    type: [String],
    default() {
      return "";
    },
  },
});
import { useIntersectionObserver } from "@vueuse/core";
const target = ref(null);
const position = ref("hidden");

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    position.value = isIntersecting ? "visible" : "hidden";
  }
);
</script>
<style lang="less" scoped>
@import "@/less/ease.less";
.image-text {
  margin: 0 auto;
  position: relative;
  z-index: 2;
  // box-shadow: inset 0 0 4rem pink;
  // box-shadow: 0 0 4rem pink;
  // border-bottom: 1px solid var(--fg);
  &:first-child {
    box-shadow: none;
    margin-top: -4rem;
    .row {
      min-height: 80vh;
    }
  }
  &.visible {
    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6),
    :deep(p) {
      font-variation-settings: "EXPO" -30;
      &:hover {
        font-variation-settings: "EXPO" -100;
      }
    }
    :deep(h1) {
      font-style: italic;
      // font-variation-settings: "EXPO" 100;
    }
  }
  .row {
    min-height: 70vh;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    @media (max-width: 60rem) {
      display: block;
    }
  }
  .image {
    min-width: 50%;
    align-self: center;
  }
  .text {
    flex: 1;
    align-self: center;
    padding-bottom: 2rem;
    font-size: 24px;
    // padding-left: 4em;
    :deep(p) {
      width: 22em;
      max-width: 100%;
      margin-bottom: 1em;
      line-height: 1.8em;
    }
    :deep(h1),
    :deep(p) {
      text-align: left;
    }
    :deep(h1) {
      //   filter: url(#fuzz);
      //   font-weight: bold;
      //   text-transform: uppercase;
      margin-top: 1em;
      margin-bottom: 0.5em;
      line-height: 1em;
      .textappear();
      animation-delay: 0.25s;
    }
    :deep(p) {
      .textappear();
      // filter: url(#fuzz2);
      margin: 0 auto 1em 0;
      animation-delay: 0.5s;
      animation-duration: 1.5s;
      font-size: 1.25em;
    }
  }
}

.left {
  .image {
    order: 2;
    min-width: 50%;
  }
  .text {
    order: 1;
    padding-left: 4rem !important;
    :deep(p) {
      margin: 0 0 1rem auto;
    }
  }
}

.img {
  position: relative;
  width: 20rem;
  height: 20rem;
  background: #222;
  border-radius: 100%;
  border-radius: 2rem;
  // clip-path: polygon(0% 20%, 30% 0%, 100% 10%, 90% 60%, 50% 90%, 20% 70%);

  display: block;
  margin: 0 auto;
  // box-shadow: 0 0 3rem #00ffbf, inset 0 0 3rem #342411;
  box-shadow: inset 0 0 3rem #342411;
  // box-shadow: inset 0 0 3rem #784200;
  background: url(@/public/cb.webp);
  background: url(@/public/cb2.jpg);
  background: url(@/public/cb3.webp);
  background: url(@/public/cb4.jpg);
  // background: url(@/public/grblue.jpg);
  // background: url(@/public/complex.jpg);
  // background: url(@/public/pinki.png);
  // background: url(@/public/pink.jpg);
  // background: url(@/public/small.jpg);
  // background: url(@/public/bg.jpg);
  background: url(@/public/yellow.jpg);
  // background: url(@/public/mess.jpg);
  background: url(@/public/deeppurple.jpg);
  background: url(@/public/violet.jpg);
  background: url(@/public/greygrid.jpg);
  background: url(@/public/blue.jpg);
  // background: url(@/public/sharppurple.jpg);
  // background: url(@/public/sharppurple2.jpg);
  // background: url(@/public/sharppurple-xl2.jpg);
  background-size: 100vw;
  // background: url(@/public/bling2.jpg);
  background-size: 100vw;
  background-position: right;
  background-attachment: fixed;

  transition: all 2s @easeInOutExpo;
  transition-delay: 1s;
  border: 10rem solid var(--bg);
  .hidden & {
    border: 10rem solid var(--bg);
    // transform: scale(0.1);
  }
  .visible & {
    transition-delay: 1s;
    border: 0rem solid var(--bg);
    // transform: scale(1);
  }
}

.image-text {
  &:nth-child(2) .img {
    // background-image: url(@/public/cb3.webp);
    // background-image: url(@/public/yellow.jpg);
    // background-image: url(@/public/red.jpg);
    // background-image: url(@/public/pink.jpg);
    background-position: center;
  }
  &:nth-child(3) .img {
    // background-image: url(@/public/grey.jpg);
    // background-image: url(@/public/grblue.jpg);
  }
  &:nth-child(4) .img {
    // background-image: url(@/public/mess2.jpg);
    background-position: center;
  }
  &:nth-child(5) .img {
    // background-image: url(@/public/pink.jpg);
    background-position: center;
  }
}

.avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  img {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    object-fit: cover;
    object-position: top;
    border-radius: 100%;
    transition: all 1s @easeInOutExpo;
    transition-delay: 0.25s;
    .hidden & {
      transform: scale(0);
    }
  }
}
</style>
