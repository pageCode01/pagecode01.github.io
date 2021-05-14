<template>
  <section id="Profile" class="text-gray-600 body-font shadow-md">
    <div class="container pb-12 px-5 mt-16 my-2 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            class="object-cover object-center md:h-full md:w-full h-44"
            src="https://drive.google.com/uc?id=1q0NclCr1f0Pidhqd7zNU2Q66pnLfOTAI"
          />
        </div>
        <div class="flex flex-col sm:flex-row md:mt-10 xl:ml-48 lg:ml-24 md:ml-32 sm:ml-20">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div
              class="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
            >
              <img
                alt="content"
                class="object-cover object-center h-32 w-full rounded-full"
                src="https://drive.google.com/uc?id=13dx0r2-sXhilWySnJ-mO3sLoA5dmupOm"
              />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                Andy Arciniega
              </h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <h2 class="text-base font-medium title-font mb-4 md:mb-0 text-gray-900">
                Estudiante de Licenciatura en Informatica
              </h2>
            </div>
          </div>
          <div
            class="sm:w-2/3 sm:pl-8 sm:border-l border-gray-200 sm:border-t-0 border-t pt-1 sm:mt-0 text-center sm:text-left"
          >
            <span v-for="(item, index) in data" :key="index">
              <Step :title="item.title" :body="item.body" :icon="item.icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import data from "../../store/profile";
import Step from "../common/Step";

export default {
  name: "Profile",
  components: {
    Step,
  },
  setup() {
    return {
      data,
    };
  },
};
</script>
