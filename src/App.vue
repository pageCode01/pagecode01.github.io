<template>
  <div class="flex flex-col h-screen">
    <Header />

    <!--All Routes-->
    <router-view class="mb-auto" v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

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

<style>
/* This changes the animations */
.animate__animated.animate__fadeInLeft,
.animate__animated.animate__fadeOutLeft {
  --animate-duration: 600ms;
  --animate-delay: 0.4s;
}
</style>
