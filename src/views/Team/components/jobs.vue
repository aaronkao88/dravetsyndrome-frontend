<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-card no-body class="overflow-hidden" style="width: 1000px">
        <b-row no-gutters v-for="job in jobs" :key="job.id">
          <b-col md="6">
            <b-card-img alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-text> {{ job.job }} | {{ job.name }} </b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </b-container>
</template>


<script>
import apiTeam from "@/api/team";

export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          name: "徐婉馨",
          job: "第一屆理事長",
          img: "https://dravetsyndrome.tw/Images/Team/Team_1.jpg",
        },
        {
          id: 2,
          name: "張家瑜",
          job: "第一屆秘書長",
          img: "https://dravetsyndrome.tw/Images/Team/Team_2.jpg",
        },
        {
          id: 3,
          name: "遲景上醫師",
          job: "顧問-台中童綜合醫院",
          img: "https://dravetsyndrome.tw/Images/Team/Team_3.jpg",
        },
        {
          id: 4,
          name: "李秀芬醫師",
          job: "顧問-台中榮民總醫院",
          img: "https://dravetsyndrome.tw/Images/Team/Team_4.jpg",
        },
      ],
    };
  },

  methods: {
    async fetchData() {
      this.dataList = await apiTeam.get(null);
      await this.fetchData();
    },
  },
};
</script>