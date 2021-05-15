<template>
  <section id="Experience" class="text-gray-600 body-font px-16 mb-1 shadow-md">
    <div class="container px-5 py-12 mx-auto flex flex-wrap">
      <div class="flex flex-wrap w-full">
        <div class="lg:w-3/2 md:w-1/2 md:pr-10 md:py-6">
          <!--TITLE-->
          <h1
            class="text-center -mt-8 mb-4 title-font sm:text-3xl text-2xl font-medium text-gray-900"
          >
            Experiencia Laboral
          </h1>

          <!--Component to future-->
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Negocio
              </h2>
              <p class="leading-relaxed">
                Servicios y ventas en negocio familiar.
              </p>
            </div>
          </div>
          <!--Component to future-->

          <div class="flex relative">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Continuará con el paso del tiempo...
              </h2>
              <p class="leading-relaxed">...</p>
            </div>
          </div>
        </div>
        <img
          class="lg:w-2/8 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-10"
          src="https://drive.google.com/uc?id=1E-C_99Asy2bgSvn49ZxHJVThmEl7_pCe"
          alt="step"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Experience",
};
</script>
