<template>
  <section id="AboutMe" class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container sm:px-20 px-8 py-8 mx-auto">
      <div class="items-center lg:flex">
        <div class="lg:w-1/2">
          <h2 class="sm:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-100">
            ¿Quién soy?
          </h2>

          <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
            Soy un estudiante de
            <a class="font-bold text-indigo-600 dark:text-indigo-400" href="#"
              >informática</a
            >
            de la Universidad Autónoma de Santo Domingo que piensa poner en
            practica los conocimientos adquiridos tanto en mi carrera como en
            otros cursos que he realizado y las enseñanzas basadas en valores
            familiares.
          </p>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-1/2">
          <div class="flex items-center justify-center lg:justify-end">
            <div class="max-w-lg">
              <img
                class="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://drive.google.com/uc?id=105L8EwZmW3e6sDFrDX4ArFGDqAUduUPf"
                alt="Thinking"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutMe",
};
</script>
