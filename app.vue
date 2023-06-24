<template>
  <div class="app" ref="text" :class="position">
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
</script>
<style lang="less" scoped>
.app {
  padding-bottom: 8rem;
}
</style>
