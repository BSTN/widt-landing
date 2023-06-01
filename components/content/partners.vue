<template>
  <div class="partners">
    <div class="width">
      <a :href="item.url" class="partner" v-for="item in partners">
        <img :src="item.img" />
        <div class="name">{{ item.name }}</div>
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import partners from "@/content/partners.yml";
</script>
<style lang="less" scoped>
.partners {
  text-align: center;
  padding: 6rem 0;
}
.partner {
  padding: 0 2rem;
  img {
    width: 6rem;
    max-height: 3rem;
    object-fit: contain;
    mix-blend-mode: darken;
  }
  .name {
    display: none;
  }
}
</style>
