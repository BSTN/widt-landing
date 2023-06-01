<template>
  <div class="the-menu">
    <div class="sticky width">
      <!-- <button></button> -->
      <div>Wie is de trol?</div>
      <a href="#intro">introductie</a>
      <a href="#het-lespakket">lespakket</a>
      <a href="#over-ons">over ons</a>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
@import "@/less/ease.less";
.the-menu {
  text-align: right;
  width: 100%;
  position: sticky;
  top: -2em;
  padding-top: 2em;
  transition: all 0.5s;
  z-index: 99;
  .sticky {
    padding: 1em 2.5em 0.75em;
    padding: 1em 0 0.75em;
    margin: 0 auto;
    border-bottom: 0.5px solid transparent;
    @media (max-width: 80rem) {
      padding: 0em 2.5em 0.75em;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 0.5px solid var(--fg);
      opacity: 0;
      transition: all 0.5s;
    }
    .nottop & {
      &:after {
        opacity: 0.2;
      }
    }
  }
  .nottop & {
    background: var(--bg);
  }
}
.sticky > div {
  opacity: 0;
  float: left;
  font-family: "exposure";
  transform: translateY(-1em);
  transition: all 0.3s @easeInOutSine;
  transform-origin: center top;
  .nottop & {
    opacity: 1;
    transform: translateY(0);
  }
}
a {
  margin-left: 2.5rem;
  text-decoration: none;
  font-weight: 400;
  transition: all 0.5s @easeOutExpo;
  position: relative;
  display: inline-block;
  transform: scale(1);
  transition-delay: 0s;
  .menudown();
  &:hover {
    text-decoration: underline;
  }
}
button {
  @s: 1.2rem;
  width: @s;
  height: @s;
  margin-right: 1rem;
  border-radius: 100%;
  padding: 0;
  vertical-align: top;
  position: relative;
  margin-top: 0.125rem;
  border: 2px solid var(--fg);
  float: left;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: var(--fg);
    border: 0.15rem solid var(--bg);
    box-sizing: border-box;
  }
  &:hover {
    --fg: var(--link);
  }
}
</style>
