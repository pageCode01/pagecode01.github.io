<template>
  <section id="Skill" class="text-gray-600 body-font shadow-md mb-1 md:px-16">
    <div class="container px-5 py-12 mx-auto">
      <!--Title-->
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Conocimientos y Habilidades
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          El verdadero signo de la
          <span class="font-bold text-indigo-500">inteligencia</span> no es el
          conocimiento sino la imaginación (Albert Einstein)
        </p>
      </div>

      <div class="flex flex-wrap -m-4">
        <SkillItem  v-for="(item, index) in data" :key="index" :data="item"/>
      </div>
    </div>
  </section>
</template>
<script>
import SkillItem from "../common/SkillItem";
import data from "../../store/skill"

export default {
  name: "Skill",
  components: {
    SkillItem,
  },
  setup(){
      return{
          data
      }
  }
};
</script>
