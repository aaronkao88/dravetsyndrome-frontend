<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="/">
        <b-img :src="require('@/assets/draveLogo.png')" width="200"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/" class="mr-3">首頁</b-nav-item>
          <b-nav-item href="/About" class="mr-3">關於協會</b-nav-item>
          <b-nav-item href="/Rule" class="mr-3">協會章程</b-nav-item>
          <b-nav-item href="/Team" class="mr-3">協會成員</b-nav-item>
          <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="治療與藥品"
            toggle-class="nav-link-custom"
            right
          >
            <b-dropdown-item
              href="https://drive.google.com/file/d/1NuPliEXon4y1IjRQn8ANHdUdm645dKJL/view?usp=sharing"
              target="_blank"
              >一般常見藥品及治療方式</b-dropdown-item
            >
            <b-dropdown-item
              href="https://www.vghtc.gov.tw/PageView/UnitTemplate1?UnitID=780d42b7-cdf1-4a4c-aabb-b0a9ec27ed7c&UnitDefaultTemplate=1"
              target="_blank"
              >禁忌藥品</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <!-- <b-nav-item href="/Media" class="mr-3">活動及媒體露出</b-nav-item> -->
          <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="友善連結"
            toggle-class="nav-link-custom"
            right
          >
            <b-dropdown-item href="http://www.tfrd.org.tw/tfrd/" target="_blank"
              >財團法人罕見疾病基金會</b-dropdown-item
            >
            <b-dropdown-item
              href="https://www.vghtc.gov.tw/PageView/UnitTemplate1?UnitID=780d42b7-cdf1-4a4c-aabb-b0a9ec27ed7c&UnitDefaultTemplate=1"
              target="_blank"
              >台中榮民總醫院卓飛症候群專區</b-dropdown-item
            >
            <b-dropdown-item
              href="https://dravetsyndromejp.org/"
              target="_blank"
              >Dravet Syndrome JP</b-dropdown-item
            >
            <b-dropdown-item
              href="https://www.facebook.com/dravtsyndrome/"
              target="_blank"
              >Facebook粉絲專頁</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item href="/media" class="mr-3">媒體露出</b-nav-item>
          <b-nav-item href="/hospital" class="mr-3">醫院清單</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Noto+Sans+TC:wght@500&display=swap");

.navbar-light .navbar-nav .nav-link {
  font-family: "Noto Sans JP", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
}
</style>