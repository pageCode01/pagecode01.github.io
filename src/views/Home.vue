<template>
  <div id="Home">
    <Profile />
    <AboutMe />
    <Objetives />
    <Study />
    <Skill />
  </div>
</template>

<script>
import Profile from "../components/home/Profile";
import AboutMe from "../components/home/AboutMe";
import Objetives from "../components/home/Objetives";
import Study from "../components/home/Study";
import Skill from "../components/home/Skill";

export default {
  name: "Home",
  components: {
    Profile,
    AboutMe,
    Objetives,
    Study,
    Skill,
  },
};
</script>
