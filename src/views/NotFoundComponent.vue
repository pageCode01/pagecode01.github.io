<template>
<div class="bg-indigo-900 relative">
    <img src="https://i.ibb.co/vsMd4gZ/error404.jpg" class="absolute h-full w-full object-cover"/>
    <div class="inset-0 bg-black opacity-25 absolute">
    </div>
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-20">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
            <h1 class="font-extrabold md:text-5xl sm:text-4xl text-3xl text-center text-white leading-tight mt-4">
                Página no encontrada.
            </h1>
            <p class="font-extrabold md:text-8xl sm:text-5xl text-4xl md:my-28 my-2 text-white animate-bounce">
                Error 404
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'NotFoundComponent'
}
</script>
