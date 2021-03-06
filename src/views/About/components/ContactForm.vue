<template>
  <div>
    <b-form-group
      class="mx-auto"
      v-model="name"
      style="width: 50%"
      label="姓名 : *"
      label-align-sm="left"
      label-for="text"
    >
      <b-form-input id="text"></b-form-input>
    </b-form-group>

    <b-form-group
      class="mx-auto"
      v-model="email"
      style="width: 50%"
      label="電子信箱: *"
      label-align-sm="left"
      label-for="email"
    >
      <b-form-input id="email"></b-form-input>
    </b-form-group>

    <b-form-group
      class="mx-auto"
      v-model="phone"
      style="width: 50%"
      label="連絡電話: *"
      label-align-sm="left"
      label-for="phone"
    >
      <b-form-input id="phone"></b-form-input>
    </b-form-group>

    <b-form-group
      class="mx-auto"
      v-model="subtitle"
      style="width: 50%"
      label="問題主旨: *"
      label-align-sm="left"
      label-for="text"
    >
      <b-form-input id="text"></b-form-input>
    </b-form-group>

    <b-form-group
      class="mx-auto"
      style="width: 50%"
      v-model="description"
      label="病況描述｜絕對保密 *"
      label-align-sm="left"
      label-for="text"
    >
      <b-form-input id="text"></b-form-input>
    </b-form-group>

    <b-form-group
      class="mx-auto"
      style="width: 50%"
      label="說明: *"
      label-align-sm="left"
      label-for="textarea"
    >
      <b-form-textarea
        id="textarea"
        v-model="textarea"
        placeholder="說明......"
        rows="10"
        max-rows="10"
      ></b-form-textarea>
      <b-button variant="primary" class="mt-2" @click="postContact"
        >提交
      </b-button>
    </b-form-group>
  </div>
</template>




<script>
import apiPostContact from "@/api/contact";

export default {
  methods: {
    async fetchData() {
      this.dataList = await apiPostContact.get(null);
      await this.fetchData();
    },
  },
};
</script>
