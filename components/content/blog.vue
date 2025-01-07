<template>
  <div class="blog">
    <a href="https://www.nemokennislink.nl/publicaties/het-is-handig-maar-bellen-is-prettiger/" target="_blank" class="item">
      <div class="date">31 december 2024</div>
      <div class="title">‘Het is handig, maar bellen is prettiger’</div>

      <div class="link">Lees
        het artikel op nemokennislink.nl →
      </div>
    </a>
    <a href="https://www.nemokennislink.nl/publicaties/ouderen-redden-zich-online-prima/" target="_blank" class="item">
      <div class="date">24 december 2024</div>
      <div class="title">‘Ouderen redden zich online prima’</div>

      <div class="link">Lees
        het artikel op nemokennislink.nl →
      </div>
    </a>
    <a href="https://www.nemokennislink.nl/publicaties/zeker-in-vakanties-is-online-contact-fijn/" target="_blank" class="item">
      <div class="date">17 december 2024</div>
      <div class="title">‘Zeker in vakanties is online contact fijn’</div>

      <div class="link">Lees
        het artikel op nemokennislink.nl →
      </div>
    </a>
    <a href="https://www.nemokennislink.nl/publicaties/continu-met-elkaar-in-contact/" target="_blank" class="item">
      <div class="date">11 november 2024</div>
      <div class="title">‘Continu met elkaar in contact’</div>

      <div class="link">Lees
        het artikel op nemokennislink.nl →
      </div>
    </a>
    <a href="https://www.nemokennislink.nl/publicaties/ai-tilt-discussie-naar-hoger-niveau/" target="_blank"
      class="item">
      <div class="date">29 maart 2024</div>
      <div class="title">‘AI tilt discussie naar hoger niveau’</div>

      <div class="link">Lees
        het artikel op nemokennislink.nl →
      </div>
    </a>
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
  margin: 0 auto 2rem;

  text-align: center;
  padding: 2rem 1rem;
  text-decoration: none;
  display: block;

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
