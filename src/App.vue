<template>
  <div class="flex flex-col h-screen">
    <Header />

    <!--All Routes-->
    <router-view class="mb-auto" />

    <Footer />
  </div>
</template>
<script>
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
