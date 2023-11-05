<template>
  <div class="the-menu">
    <div class="sticky">
      <div class="left">
        <a href="/">intro</a>
        <a href="/#blog">blog</a>
      </div>
      <div class="center">
        <a href="/#voor-scholen">scholen</a>
        <a href="/#voor-bibliotheken">bibliotheken</a>
        <a href="/#voor-festivals">festivals</a>
      </div>
      <div class="right">
        <a href="/#over-ons">over ons</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
@import "@/less/ease.less";
.the-menu {
  width: 100%;
  position: sticky;
  position: fixed;
  top: 0em;
  padding-top: 0em;
  transition: all 0.5s;
  z-index: 99;
  font-family: "exposure";
  text-transform: uppercase;
  font-variation-settings: "EXPO" -40;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 1em;
  .sticky {
    padding: 1em 2.5em 0.75em;
    // padding: 0.75em 2em 0.25em;
    margin: 0 auto;
    border-bottom: 0.5px solid transparent;
    display: flex;
    // color: var(--bg);
    // &:after {
    //   content: "";
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   width: 100%;
    //   // border-bottom: 0.5px solid var(--fg);
    //   opacity: 0;
    //   transition: all 0.5s;
    // }
    .nottop & {
      box-shadow: 0 0 1rem rgba(#000, 0.2);
      color: var(--fg);
      padding: 0.5em 1em 0;
      &:after {
        opacity: 0.2;
      }
      .center {
        &:before,
        &:after {
          opacity: 0 !important;
        }
      }
    }
  }
  .nottop & {
    background: var(--bg);
  }
}
.left {
  flex: 1;
  text-align: left;
  max-width: 14rem;
}
.right {
  flex: 1;
  text-align: right;
  max-width: 14rem;
}
.center {
  text-align: center;
  flex: 1;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  // line-height: 1em;
  &:before,
  &:after {
    transition: all 0.15s;
    .fadein();
  }
  &:before {
    content: "voor";
    position: absolute;
    top: 0.45rem;
    font-size: 0.4rem;
    letter-spacing: 0.05em;
    left: calc(50% - 2.5em);
    width: 5em;
    text-align: center;
  }
  &:after {
    content: "2023—2024";
    position: absolute;
    bottom: 0.6rem;
    font-size: 0.4rem;
    letter-spacing: 0.05em;
    left: calc(50% - 2.5em);
    width: 5em;
    text-align: center;
  }
}

a {
  margin-top: -0.25rem;
  letter-spacing: 0.05em;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.5s @easeOutExpo;
  position: relative;
  display: inline-block;
  transform: scale(1);
  transition-delay: 0s;
  font-size: 0.8em;
  overflow: auto;
  .menudown();
  &:hover {
    // text-decoration: underline;
    font-variation-settings: "EXPO" -100;
    // color: var(--fg);
    color: var(--link);
    // text-shadow: 0 0 1em var(--link);
    // letter-spacing: 0.1em;
  }
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
}

@media (max-width: 40rem) {
  .the-menu {
    padding: 0;
    .sticky {
      padding: 0.5em;
    }
  }
  .center {
    display: none;
  }
}
</style>
