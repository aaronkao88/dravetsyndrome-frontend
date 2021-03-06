<template>
  <div>
    <b-card
      overlay
      img-src="https://dravetsyndrome.tw/Images/HomeSlider/slide_1.jpg"
      img-alt="Card Image"
    >
    </b-card>
    <articleList></articleList>
  </div>
</template>


<script>
import articleList from "./components/article";
import apiSlide from "@/api/slide";

export default {
  components: {
    articleList,
  },
  methods: {
    async fetchData() {
      this.dataList = await apiSlide.get(null);
      await this.fetchData();
    },
  },
};
</script>
