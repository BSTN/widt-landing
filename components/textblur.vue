<template>
  <svg class="textblur" ref="text">
    <filter :id="filterid">
        <!-- <feMorphology operator="dilate" radius="2" result="start"></feMorphology>
        <feMorphology operator="erode" radius="2" result="start"></feMorphology> -->
        <feGaussianBlur
          :stdDeviation="_blur"
          in="start"
          result="main"
        ></feGaussianBlur>
        <feGaussianBlur
          :stdDeviation="_blur"
          in="main"
          result="blur"
        ></feGaussianBlur>
        <feComposite
          operator="arithmetic"
          in="main"
          in2="blur"
          k1="0"
          :k2="_sharpen + 1"
          :k3="_sharpen * -1"
          k4="0"
        ></feComposite>
        <!-- <feMorphology operator="dilate" radius=".5" result="start"></feMorphology> -->
        <!-- recolor -->
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="table" :tableValues="`${R} ${R}`"></feFuncR>
          <feFuncG type="table" :tableValues="`${G} ${G}`"></feFuncG>
          <feFuncB type="table" :tableValues="`${B} ${B}`"></feFuncB>
        </feComponentTransfer>
      </filter>
    </svg>
</template>
<script lang="ts" setup>

const {sharpen, blur, filterid} = defineProps({
  sharpen: {
    type: [String],
    default: () => '10'
  },
  blur: {
    type: [String],
    default: () => '2'
  },
  filterid: {
    type: [String],
    default: () => 'textblurfilter'
  },
})

const _blur = computed(() => parseInt(blur))
const _sharpen = computed(() => parseInt(sharpen))

const text = ref(null);
const R = ref(0);
const G = ref(0);
const B = ref(0);

function setColors() {
  if (text.value) {
    const fg = window
      .getComputedStyle(text.value, null)
      .getPropertyValue("color");
    const [fgr, fgg, fgb] = fg
      .substring(fg.indexOf("(") + 1, fg.lastIndexOf(")"))
      .split(/,\s*/);
    R.value = parseInt(fgr) / 256;
    G.value = parseInt(fgg) / 256;
    B.value = parseInt(fgb) / 256;
  }
}

onUpdated(() => {
  setColors();
});

onMounted(() => {
  setColors();
});
</script>
<style lang="less" scoped>
.textblur {
  position:fixed;
  width:0;
  height: 0;
  pointer-events: none;
}
</style>