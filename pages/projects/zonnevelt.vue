<template>
  <div class="xl:mx-24 lg:mx-12">
    <div class="xl:text-6xl lg:text-6xl xl:block lg:block hidden font-sans font-bold my-5">
      Details
    </div>
    <div class="flex">
      <div class="xl:w-6/12 w-full">
        <carousel :perPage="1">
          <slide>
            <img
              class="xl:rounded-lg lg:rounded-lg shadow-lg"
              src="../../assets/img/Zonnevelt.jpg"
            >
          </slide>
          <slide>
            <img
              class="xl:rounded-lg lg:rounded-lg shadow-lg"
              src="../../assets/img/Zonnevelt.jpg"
            >
          </slide>
        </carousel>
      </div>
      <div class="ml-10 xl:w-6/12 text-xl">
        <div class="text-black font-mono font-light bg-custom-100 rounded-lg p-4 shadow-md">
          <div>
            Vue
            <div class="my-4 bg-custom-200 w-8/12 h-4 rounded-full" />
          </div>
          <div>
            Vuex
            <div class="my-4 bg-custom-200 w-6/12 h-4 rounded-full" />
          </div>
          <div>
            Socket.io
            <div class="my-4 bg-custom-200 w-10/12 h-4 rounded-full" />
          </div>
        </div>
        <div class="mt-10">
          <div class="text-4xl my-3 font-bold">
            Zonnevelt Case
          </div>
          During this project I focussed on developing backend services in Spring boot.
          I used Spring Security and Kubernetes for hosting on dedicated servers.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
</style>
