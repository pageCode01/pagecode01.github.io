<template>
  <div class="flex flex-col pb-6 items-center sm:flex-row sm:pb-0">
    <div class="sm:mr-5">
      <div
        class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-20 sm:h-20"
      >
        <!--Icon-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sm:h-8 sm:w-8 h-6 w-6 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          v-html="icon"
        ></svg>
        <!--Icon-->
      </div>
    </div>
    <div>
      <p class="text-xl font-semibold sm:text-base">{{ title }}</p>
      <p class="text-sm text-gray-700">
        {{ body }}
      </p>
    </div>
  </div>
</template>
<script>
import { toRefs } from "vue";
export default {
  name: "Step",
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    //Show Variable
    return {
      ...toRefs(props),
    };
  },
};
</script>
