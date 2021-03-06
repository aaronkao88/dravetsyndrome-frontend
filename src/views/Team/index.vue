<template>
  <div id="app">
    <b-card style="height: auto; background-color: #56317c; color: #fff">
      <h2 class="text-center">協會成員 Team</h2>
    </b-card>
    <b-container>
      <b-card
        style="
          border: 1px solid #fafafa;
          box-shadow: 1px 10px 10px #ddd;
          margin: 60px 0;
        "
      >
        <jobCard class="mt-5"></jobCard>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import jobCard from "./components/jobs";

export default {
  components: {
    jobCard,
  },
};
</script>
