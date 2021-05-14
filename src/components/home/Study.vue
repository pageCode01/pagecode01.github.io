<template>
  <section id="Study" class="text-gray-600 body-font shadow-md py-6">
    <h1
      class="title-font text-center sm:text-3xl text-2xl mb-4 font-medium text-gray-900"
    >
      Formación Académica
    </h1>
    <div class="container px-20 py-10 mb-2 mx-auto">
      <div class="flex flex-wrap -mx-6 -my-8">
        <StudyItem v-for="(item, index) in data" :key="index" :data="item"/>
      </div>
    </div>
  </section>
</template>
<script>
import StudyItem from "../common/StudyItem";
import data from "../../store/study";

export default {
  name: "Study",
  components: {
    StudyItem,
  },
  setup() {
    return {
      data,
    };
  },
};
</script>
