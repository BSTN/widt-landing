<template>
  <div class="app" ref="text" :class="[position, twice]">
    <theMenu></theMenu>
    <ContentDoc />
  </div>
</template>
<script type="ts" setup>
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
const position = computed(() => {
  return y.value < 10 ? 'top' : 'nottop'
})
const twice = computed(() => {
  return y.value > (window.innerHeight * 2) ? 'twice' : 'nottwice'
})
</script>
<style lang="less" scoped>
.app {
  padding-bottom: 8rem;
}
</style>
