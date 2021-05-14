<template>
  <div id="Home">
    <Profile />
    <AboutMe />
    <Objetives />
    <Study />
  </div>
</template>

<script>
import Profile from "../components/home/Profile";
import AboutMe from "../components/home/AboutMe";
import Objetives from "../components/home/Objetives";
import Study from "../components/home/Study";

export default {
  name: "Home",
  components: {
    Profile,
    AboutMe,
    Objetives,
    Study,
  },
};
</script>
