<template>
  <div>
    <b-card style="height: auto; background-color: #56317c; color: #fff">
      <h2 class="text-center mt-4">關於協會 AboutsUs</h2>
      <hr class="mt-5 bg-light" width="340" />
      <p class="text-center pt-2" style="font-size: 29px">
        台灣卓飛協會的成立初心是照顧者們希望成為分享平台<br />
        幫助有同樣困境的家長，也讓社會大眾更了解卓飛症候群<br />
        提早確診，正確控制病發，讓越早確診的孩子能更好的成長<br />
        發育也讓協會陪伴支持所有辛苦的照顧者
      </p>
    </b-card>
    <h2 class="text-center mt-5">聯絡我們 ContactUs</h2>
    <hr class="mt-5 bg-dark" width="340" />
    <contactForm></contactForm>
  </div>
</template>

<script>
import contactForm from "./components/ContactForm";

export default {
  components: {
    contactForm,
  },
};
</script>