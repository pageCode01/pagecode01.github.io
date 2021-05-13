<template>
  <!--Nav-->
  <Header />
  <!--All Routes-->
  <router-view />
</template>
<script>
import Header from "./components/base/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
