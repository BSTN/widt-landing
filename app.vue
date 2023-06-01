<template>
  <div class="app" ref="text" :class="position">
    <textblur filterid="fuzz" blur="3" sharpen="100"></textblur>
    <textblur filterid="fuzz2" blur="1" sharpen="50"></textblur>
    <theMenu></theMenu>
    <ContentDoc />
  </div>
</template>
<script type="ts" setup>
import { useWindowScroll } from '@vueuse/core'
const {y} = useWindowScroll()
const position = computed(() => {
  return y.value < 10 ? 'top' : 'nottop'
})
</script>
<style lang="less" scoped>
.app {
  padding-bottom: 8rem;
}
</style>
