<template lang="">
<header class="text-gray-600 body-font shadow-lg">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      <span class="ml-3 text-xl font-mono">Andy J. <span class="text-green-500">Arciniega</span></span>
    </a>
    <nav class="md:mx-auto md:text-base flex flex-wrap items-center text-sm justify-center">
      <a href="#Profile" class="md:mr-5 mr-2 hover:text-green-500">Perfil</a>
      <a href="#AboutMe" class="md:mr-5 mr-2 hover:text-green-500">¿Quién soy?</a>
      <a href="#Objetives" class="md:mr-5 mr-2 hover:text-green-500">Objetivo</a>
      <a href="#Study" class="md:mr-5 mr-2 hover:text-green-500">Formación</a>
      <a class="md:mr-5 mr-2 hover:text-green-500">Habilidades</a>
      <a class="md:mr-5 mr-2 hover:text-green-500">Expericiencia</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 text-green-500 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:mr-12">Enviar Email
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
</template>

<script>
export default {
    name:"Header"
};
</script>
