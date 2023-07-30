<template>
  <div class="partners">
    <div class="width">
      <a
        :href="item.url"
        target="_blank"
        class="partner"
        v-for="item in partners"
      >
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
  .width {
    // width: 50rem;
  }
}
.partner {
  padding: 0 2rem 3rem;
  img {
    width: 12rem;
    max-height: 6rem;
    object-fit: contain;
    mix-blend-mode: darken;
    margin-bottom: 2.5rem;
  }
  .name {
    display: none;
  }
}
</style>
