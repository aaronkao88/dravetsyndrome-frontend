<template>
  <div id="app">
    <b-container>
      <b-card
        style="
          border: 1px solid #fafafa;
          box-shadow: 1px 10px 10px #ddd;
          margin: 20px 0;
        "
      >
        <h2 class="text-center mt-4">最新文章 NewArticle</h2>
        <hr class="mt-5 bg-light" width="340" />
        <b-card-body style="max-width: auto; margin: 20px auto">
          <div v-for="article in Articles" v-bind:key="article">
            <b-card-text> {{ article.title }} </b-card-text>
            <span>編輯者：{{ article.Editor }} </span>
            <b-card-text
              >{{ `${article.subTitle.slice(0, 87)}...` }}
              <b-button href="#" class="ml-2" variant="primary"
                >閱讀更多</b-button
              >
            </b-card-text>
            <hr style="margin: 70px 0" color="#eee" />
          </div>
        </b-card-body>

        <div class="overflow-auto">
          <div>
            <b-col md="4" offset-md="5">
              <b-pagination-nav
                pills
                size="ma"
                number-of-pages="1"
                base-url="#"
              ></b-pagination-nav>
            </b-col>
          </div>
        </div>
      </b-card>
    </b-container>
  </div>
</template>


<script>
import apiArticle from "@/api/article";

export default {
  data() {
    return {
      apiArticle,
    };
  },
  methods: {
    // 這是文章列表
    async fetchData() {
      this.dataList = await apiArticle.get(null);
      await this.fetchData();
    },
  },
};
</script>