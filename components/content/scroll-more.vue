<template>
  <div class="scroll-more"><p>lees meer</p></div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.scroll-more {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  padding: 0.5em;
  pointer-events: none;
  opacity: 1;
  transition: all 0.5s @easeInOutExpo;
  .nottop & {
    opacity: 0;
    transform: translateY(-1em);
  }
}
</style>
