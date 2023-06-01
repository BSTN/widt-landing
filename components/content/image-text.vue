<template>
  <section class="image-text" ref="target" :class="position">
    <div class="row width">
      <div class="image">
        <!-- image -->
        <div class="img">
          <!-- comments -->
          <div
            class="comments"
            v-if="type === 'comments' && position === 'visible'"
          >
            <div v-for="comment in comments" class="comment">
              <div class="date">{{ comment.date }}</div>
              <div class="commenttext">{{ comment.text }}</div>
            </div>
          </div>
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
import comments from "@/content/comments.yml";
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
  &:first-child {
    margin-top: -4rem;
    .row {
      min-height: 80vh;
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
    // border-left: 1px solid #fff;
    // border-right: 1px solid #fff;
    // &:after {
    //   content: "";
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 0.5em;
    //   background: url(/bg.jpg);
    //   background-attachment: fixed;
    //   background-size: 100vw;
    // }
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
    padding-left: 2em;
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
  // clip-path: polygon(0% 20%, 30% 0%, 100% 10%, 90% 60%, 50% 90%, 20% 70%);

  display: block;
  margin: 0 auto;
  // box-shadow: 0 0 3rem #00ffbf, inset 0 0 3rem #342411;
  box-shadow: inset 0 0 3rem #342411;
  background: url(/cb.webp);
  background: url(/bg.jpg);
  // background: url(/yellow.jpg);
  background-size: 100vw;
  background-position: right;
  background-attachment: fixed;

  transition: all 1s @easeInOutExpo;
  transition-delay: 1s;
  border: 10rem solid var(--bg);
  .hidden & {
    // transform: scale(0.1);
  }
  .visible & {
    transition-delay: 0s;
    border: 0rem solid var(--bg);
    // transform: scale(1);
  }
}

.comments {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .comment {
    position: absolute;
    // dark
    background: #211e20;
    color: #fff7dd;
    // light
    background: #fdfcf7;
    color: #332e1c;
    // blue
    background: #ffffff;
    color: var(--fg);
    // text-shadow: 0 0 0.125em #2affaa;
    // colours
    // background: #103b5e;
    // background: #1d2a27;
    // background: #141414;
    // color: #fff7dd;

    font-size: 14px;
    line-height: 1.4em;
    padding: 1em 1.5em 1.5em;
    border-radius: 0 1em 1em 1em;
    width: 23em;
    box-shadow: 0 0.125em 1em #2affaa;
    box-shadow: 0 0.125em 1em #ffa38f;
    box-shadow: 0 0.125em 1em var(--bg2);

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
      animation-delay: 1.75s;
    }
    &:nth-child(4) {
      animation-delay: 2.5s;
    }

    &:hover {
      transform: scale(1.1) !important;
    }
    .date {
      font-size: 0.8em;
      opacity: 0.5;
      margin-bottom: 0.25em;
      text-align: right;
    }
    &:nth-child(even) {
      border-radius: 0.5em 0 0.5em 0.5em;
    }
    &:nth-child(1) {
      right: 0;
      top: -2rem;
    }
    &:nth-child(2) {
      left: -4rem;
      top: 4rem;
      // background: #18212b;
    }
    &:nth-child(3) {
      right: -2rem;
      top: 8rem;
      // background: #23182b;
    }
    &:nth-child(4) {
      left: 0;
      top: 13rem;
      // background: #5f3248;
    }
  }
}
.image-text {
  &:nth-child(2) .img {
    // background-image: url(/cb3.webp);
    // background-image: url(/yellow.jpg);
    // background-image: url(/red.jpg);
    // background-image: url(/pink.jpg);
    background-position: center;
  }
  &:nth-child(3) .img {
    // background-image: url(/grey.jpg);
    // background-image: url(/grblue.jpg);
  }
  &:nth-child(4) .img {
    // background-image: url(/mess2.jpg);
    background-position: center;
  }
  &:nth-child(5) .img {
    // background-image: url(/pink.jpg);
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
