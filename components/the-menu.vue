<template>
  <div class="the-menu">
    <div class="sticky width">
      <a href="#het-lespakket">lespakket</a>
      <a href="#over-ons">over ons</a>
      <button></button>
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
  top: 0;
  // outline: 1px solid #fff;
  height: 2em;
  .sticky {
    padding: 2em 0 0.75em;
    margin: 0 auto;
    border-bottom: 0.5px solid var(--fg);
  }
}
a {
  margin-left: 2rem;
  text-decoration: none;
  font-weight: 400;
  transition: all 0.5s @easeOutExpo;
  position: relative;
  display: inline-block;
  transform: scale(1);
  transition-delay: 0s;
  &:hover {
    text-decoration: underline;
  }
  .nottop & {
    transition-delay: 0.5s;
    opacity: 0;
    transform: translateY(-1em);
  }
}
button {
  @s: 1.2rem;
  width: @s;
  height: @s;
  margin-left: 2rem;
  border-radius: 100%;
  padding: 0;
  vertical-align: top;
  position: relative;
  margin-top: 0.125rem;
  border: 2px solid var(--fg);
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
