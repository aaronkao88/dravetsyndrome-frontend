<template>
  <div id="app">
    <TheNavBar></TheNavBar>
    <router-view />
    <TheFooterBar></TheFooterBar>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");

h2 {
  font-family: "Noto Sans JP", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
}
p {
  font-weight: 400;
  margin-top: 50px;
  font-size: 30px;
  font-family: "Noto Sans TC", sans-serif;
}
</style>

<script>
import TheNavBar from "@/components/TopMenu";
import TheFooterBar from "@/components/BottomFooter.vue";

export default {
  components: {
    TheNavBar,
    TheFooterBar,
  },
};
</script>
