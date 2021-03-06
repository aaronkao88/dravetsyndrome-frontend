<template>
  <b-card style="background-color: #2e2e2e; border: none; color: #fff">
    <b-container class="bv-example-row bv-example-row-flex-cols mt-5 mb-5">
      <b-row align-v="stretch mt-5">
        <b-col>
          <b-img
            :src="require('@/assets/draveLogo-White.png')"
            width="250"
          ></b-img>
        </b-col>
        <b-col></b-col>
        <b-col v-for="footer in footerText" :key="footer.id" class="mt-4">
          <span>{{ footer.text }}</span>
        </b-col>
      </b-row>
      <hr color="#fff" class="mt-5" />

      <b-row align-v="stretch mt-5">
        <b-col>
          Copyright © 2020 - {{ new Date().getFullYear() }} Dravetsyndrome All
          Right Reserved. Designed with Aaron.
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      footerText: [
        {
          text: "活動及媒體",
        },
        {
          text: "協會規章",
        },
        {
          text: "聯絡我們",
        },
      ],
    };
  },
};
</script>
