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
        <div class="mt-4">
          <h3>看診前注意事項：</h3>
          <div class="mt-5">
            <span>
              以下是在台灣可看診的醫院資訊<br />在前往診所之前
              請先向醫院預約掛號<br />
              不確定當地醫院是否接受緊急接待或諮詢
            </span>
          </div>
          <b-list-group v-for="hospital in apiHospital" :key="hospital.id">
            <b-list-group-item class="mt-4" style="border-radius: 20px">
              醫院名稱：{{ hospital.name }}<br /><br />
              醫院地址：{{ hospital.address }}<br /><br />
              醫院電話：{{ hospital.phone }}
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import apiHospital from "@/api/hospital";

export default {
  data() {
    return {
      apiHospital: [
        {
          id: 1,
          name: "臺北榮民總醫院",
          address: "112台北市北投區石牌路二段201號",
          phone: "總機：02-2871-2121",
        },
        {
          id: 2,
          name: "國泰醫療財團法人國泰綜合醫院",
          address: "臺北市仁愛路四段280號",
          phone: "02-27082121",
        },
        {
          id: 3,
          name: "台灣大學醫學院附設醫院",
          address: "100226 台北市中山南路8號(兒醫大樓門診住院服務)",
          phone: "臺大醫院總機電話專線: 02-2312-3456",
        },
        {
          id: 4,
          name: "台北醫學大學附設醫院",
          address: "110301臺北市信義區吳興街252號",
          phone: "代表號：02-27372181",
        },
        {
          id: 5,
          name: "林口長庚紀念醫院",
          address: "333桃園市龜山區復興街5號",
          phone: "代表號：02-27372181",
        },
        {
          id: 6,
          name: "童綜合醫療社團法人童綜合醫院",
          address: "435台中市梧棲區台灣大道八段699號",
          phone: "梧棲院區 04-26581919",
        },
        {
          id: 7,
          name: "臺中榮民總醫院",
          address: "40705台中市西屯區台灣大道四段1650號",
          phone: "總機: (04)2359-2525",
        },
        {
          id: 8,
          name: "高雄長庚紀念醫院",
          address: "833高雄市鳥松區大埤路123號",
          phone: "07 731 7123",
        },
      ],
    };
  },
  methods: {
    // 這是文章列表
    async fetchData() {
      this.dataList = await apiHospital.get(null);
      await this.fetchData();
    },
  },
};
</script>