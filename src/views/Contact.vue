<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Contactar Conmigo
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Comunícate conmigo mandando un correo!!
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <!--Form-->
        <form class="flex flex-wrap -m-2" @submit.prevent="send()">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Titulo</label
              >
              <input
                required="true"
                v-model="title"
                @mousedown="contactAgain()"
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                required="true"
                v-model="email"
                @mousedown="contactAgain()"
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600"
                >Mensaje</label
              >
              <textarea
                v-model="message"
                @mousedown="contactAgain()"
                required="true"
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              type="submit"
              class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Enviar
            </button>
          </div>
        </form>
        <!---->
        <div
          v-if="status"
          class="mt-8 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <div class="flex items-center justify-center w-12 bg-green-500">
            <svg
              class="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
              />
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-green-500 dark:text-green-400"
                >Enviado!!</span
              >
              <p class="text-sm text-gray-600 dark:text-gray-200">
                En cuestión de minuto será informado.
              </p>
            </div>
          </div>
        </div>
        <!---->
        <hr class="border-b border-gray-200 mt-8" />
      </div>
    </div>
  </section>
</template>
<script>
import { reactive, ref, toRefs } from "vue";

export default {
  name: "Contact",
  setup() {
    const form = reactive({
      title: "",
      email: "",
      message: "",
    });

    const status = ref(false)

    function send() {
      //https://backfastapi.herokuapp.com/email
      fetch("https://www.andycodeapi.ga/email/", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => status.value = response.email.user);
        clean()
    }

    function contactAgain(){
      status.value = false
    }

    function clean(){
      for(let item in form){
        form[item] = ''
      }
    }

    return {
      ...toRefs(form),
      send,
      status,
      contactAgain
    };
  },
};
</script>