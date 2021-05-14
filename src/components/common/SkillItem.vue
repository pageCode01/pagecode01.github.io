<template>
      <div class="lg:w-1/3 sm:w-1/2 p-4 sm:mx-0 mx-auto">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="image">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">{{title}}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{subTitle}}</h1>
            <p class="leading-relaxed">conocimiento en el area: {{body}} <span class="text-indigo-500 font-bold">{{info}}</span></p>
          </div>
        </div>
      </div>
</template>
<script>
import { toRefs } from "vue";

export default {
  name: "SkillItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      ...toRefs(props.data),
    };
  },
};
</script>
