<template>
  <div
    class="app"
    ref="text"
    :class="[position, twice, $route.path]"
    :path="$route.path"
  >
    <theMenu></theMenu>
    <ContentDoc class="content-doc"/>
  </div>
</template>
<script type="ts" setup>
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
const position = computed(() => {
  return y.value < 10 ? 'top' : 'nottop'
})
const twice = computed(() => {
  return y.value > 2000 ? 'twice' : 'nottwice'
  // if (window) {
  //   return y.value > (window.innerHeight * 2) ? 'twice' : 'nottwice'
  // } else {
  //   return y.value > 1000 ? 'twice' : 'nottwice'
  // }
})
</script>
<style lang="less" scoped>
.app {
  padding-bottom: 8rem;
}
</style>
