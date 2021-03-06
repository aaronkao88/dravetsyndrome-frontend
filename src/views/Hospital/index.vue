<template>
  <div>
    <b-card style="height: 135px; background-color: #56317c; color: #fff">
      <h2 class="text-center mt-4">台灣看診醫院 Hospital</h2>
    </b-card>
    <HospitalList></HospitalList>
  </div>
</template>

<script>
import HospitalList from "./components/List";

export default {
  components: {
    HospitalList,
  },
};
</script>