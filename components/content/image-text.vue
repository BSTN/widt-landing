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
  background: var(--bg);
  // box-shadow: inset 0 0 4rem pink;
  // box-shadow: 0 0 4rem pink;
  // border-bottom: 1px solid var(--fg);
  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6),
  :deep(p) {
    transition: all 2s;
    // font-variation-settings: "wght" 100;
  }
  &.visible {
    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6),
    :deep(p) {
      // font-variation-settings: "wght" 400;
    }
    :deep(h1) {
      // font-style: italic;
    }
  }
  .row {
    min-height: 60vh;
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
    width: 20rem;
    max-width: 100%;
    // padding-left: 4em;
    :deep(p) {
      width: 22em;
      max-width: calc(100% - 2em);
      margin-bottom: 1em;
      line-height: 1.5em;
    }
    :deep(h1),
    :deep(p) {
      text-align: left;
    }
    :deep(h1) {
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
      font-size: 1em;
      font-variation-settings: "wght" 400;
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
  background: var(--bgimg);
  background-size: 100vw;
  // background: url(@/public/bling2.jpg);
  background-size: 100vw;
  background-position: right;
  background-attachment: fixed;

  transition: all 2s @easeInOutExpo;
  transition-delay: 0s;
  border: 1rem solid var(--bg);
  .hidden & {
    // border: 10rem solid var(--bg);
  }
  .visible & {
    transition-delay: 1s;
    border: 0rem solid var(--bg);
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

@media (max-width: 60rem) {
  .img {
    width: calc(100% - 1rem);
    height: 4rem;
    margin: 0.5em;
    border-radius: 1em;
  }
  .image-text {
    .text {
      width: 100%;
      :deep(p) {
        margin: 2em auto;
      }
    }
  }
}
</style>
