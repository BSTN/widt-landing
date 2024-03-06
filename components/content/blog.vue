<template>
  <div class="blog">
    <a href="https://www.nemokennislink.nl/publicaties/een-online-discussie-is-vaak-geen-echte-dialoog/" target="_blank"
      class="item">
      <div class="date">1 maart 2024</div>
      <div class="title">‘Een online discussie is vaak geen echte dialoog’</div>

      <div class="link">Lees
        het artikel op nemokennislink.nl →
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.blog {
  padding: 2rem 0;

}

.item {
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0;
  text-decoration: none;

  .date {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .title {
    font-size: 1.5rem;
    margin: 1rem auto 2rem;
    width: 24rem;
    max-width: 100%;
    line-height: 1.2em;
  }

  .link {
    color: var(--link);
    text-decoration: none;
  }

  &:hover {
    .link {
      text-decoration: underline;
    }
  }
}
</style>
