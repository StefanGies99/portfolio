<template>
  <div>
    <div class="flex h-screen w-full items-center justify-center">
      <div>
        <div class="text-6xl font-bold font-sans text-white">
          Hi, I'm <a href="https://www.linkedin.com/in/stefan-gies-85572712a" class="text-purple-700">Stefan</a> 👋
        </div>
        <div class="text-white text-2xl">
          Full-stack software developer, living in Zeeland,
          <br />
          Noord-Brabant. Passionated in creating cool
          <br />
          apps and online platforms.
        </div>
        <button class="bg-white hover:bg-gray-100 hover:text-purple-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mt-10">
            Learn more
        </button>
      </div>
    </div>
    <div class="h-screen w-full text-center mt-10 font-sans font-bold">
      <div class="text-6xl text-white">
        Projects
      </div>
      <div class="flex flex-wrap justify-around text-black xl:p-10 lg:p-10">
        <div v-for="project in projects" v-bind:key="project.id" class="xl:w-1/3 lg:w-1/2 md:1/2 sm:w-full w-full h-384 p-4" >
          <div class="h-full rounded-lg bg-center bg-cover" :style="{ backgroundImage: 'url(' + require('../assets/img/'+ project.image) + ')' }">
            <div class="mt-10">
              <span v-for="tag in project.tags" v-bind:key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-4">{{tag}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="h-screen w-full text-center mt-10 font-sans font-bold text-white">
        <div class="text-6xl">
          Contact
        </div>
        <div>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Mail</span>
            <svg class="fill-current w-5 h-5 ml-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10l9.167 2.583L15 5.833 8.203 10.56 4.61 9.558l12.802-6.4L14.1 15.3l-3.125-2.783-1.808 2.438v-.64L7.5 13.847V20l3.727-5.026L15 18.334 20 0z"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Stock/r',
          image: 'Stock.jpg',
          tags: [
            'vue.js',
            'nest.js',
            'apollo graphql',
            'WIP'
          ]
        },
        {
          id: 2,
          title: 'Open remote case',
          image: 'Openremote.jpg',
          tags: [
            'vue.js',
            'deck.gl',
            'mapbox gl',
            'openremote.io'
          ]
        },
        {
          id: 3,
          title: 'Next level dining case',
          image: 'Dining.jpg',
          tags: [
            'react',
            'redux',
            'socket.io'
          ]
        },
        {
          id: 4,
          title: 'Internship @ Drieam',
          image: 'Kubernetes.jpg',
          tags: [
            'kubernetes',
            'helm.io',
            'terraform',
            'ecs',
            'ec2'
          ]
        },
        {
          id: 5,
          title: 'Pharmacy application',
          image: 'Zonnevelt.jpg',
          tags: [
            'vue.js',
            'spring boot'
          ]
        },
        {
          id: 6,
          title: 'Git',
          image: 'Github.jpg',
          tags: [
            'https://github.com/gieforce'
          ]
        }
      ]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

body {
  @apply bg-black;
  margin: 0;
}
</style>
