<template>
  <div class="py-8 lg:w-1/3">
    <div class="h-full flex items-start">
      <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"
          >{{inicio}}</span
        >
        <span class="text-gray-500 pb-2 mb-2"
          >{{final}}</span
        >
      </div>
      <div class="flex-grow pl-6">
        <h2
          class="tracking-widest text-xs title-font text-indigo-500 font-bold mb-1"
        >
          {{entidad}}
        </h2>
        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
          {{nombre}}
        </h1>
        <p class="leading-relaxed mb-5">
            {{oficio}}
        </p>
        <a class="inline-flex items-center">
          <img
            alt="icon"
            :src="image"
            class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span class="flex-grow flex flex-col pl-3">
            <span class="title-font font-medium text-gray-900">Identidad Corportativa</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs } from 'vue';

export default {
  name: "StudyItem",
  props:{
    data: Object
  },
  setup(props){
      return {
        ...toRefs(props.data)
      }
  }
};
</script>
