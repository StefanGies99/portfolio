<template>
  <div>
    <div class="text-white pl-10 pt-5 text-4xl bg-black">
      G21&#47;&gt;
    </div>
    <div class="flex h-screen w-full items-center justify-center px-5 bg-black">
      <div>
        <div class="text-6xl font-bold font-sans text-white">
          Hi, I'm <a href="https://www.linkedin.com/in/stefan-gies-85572712a" class="text-purple-700">Stefan</a> 👋
        </div>
        <div class="text-white text-2xl pb-5">
          Full-stack software developer, living in Zeeland,
          <br>
          Noord-Brabant. Passionated about creating cool
          <br>
          apps and online platforms.
        </div>
        <button @click.prevent="scrollTo('#projects')" class="bg-white hover:bg-gray-100 hover:text-purple-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mt-10">
          Learn more
        </button>
      </div>
    </div>
    <div class="h-screen w-full text-center pt-10 font-sans font-bold">
      <div id="projects" class="text-6xl text-black pb-10">
        Projects
      </div>
      <div class="flex flex-wrap justify-around text-black">
        <div v-for="project in projects" v-bind:key="project.id" class="image-container xl:w-1/3 lg:w-1/2 md:1/2 sm:w-full w-full h-384 lg:h-512 px-4 py-2">
          <div :style="{ backgroundImage: 'url(' + require('../assets/img/'+ project.image) + ')' }" class="flex items-center justify-center h-full rounded-lg bg-center bg-cover xl:bg-center lg:bg-center md:bg-center">
            <nuxt-link :to="project.link" class="detail-button bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Details
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="h-128 pt-10 w-full text-center mt-10 font-sans font-bold text-white">
        <div class="text-6xl" />
        <div>
          <a href="https://github.com/gieforce" class="button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a>
          <a href="https://gitlab.com/stefangies" class="button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab icon</title><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.919 1.263C4.783.84 4.185.84 4.05 1.26L1.386 9.449.044 13.587c-.121.375.014.789.331 1.023L12 23.054l11.625-8.443c.318-.235.453-.647.33-1.024" /></svg>
          </a>
          <a href="mailto:s.gies21@gmail.com" class="button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/stefan-gies-85572712a/" class="button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
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
          link: '/projects/stock',
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
          link: '/projects/openremote',
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
          link: '/projects/dining',
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
          link: '/projects/kubernetes',
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
          link: '/projects/zonnevelt',
          tags: [
            'vue.js',
            'spring boot'
          ]
        },
        {
          id: 6,
          title: 'Git',
          image: 'Github.jpg',
          link: '/',
          tags: [
            'https://github.com/gieforce'
          ]
        }
      ]
    }
  },
  methods: {
    scrollTo (selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
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
  margin: 0;
}

.detail-button {
  display: none;
}

.image-container:hover .detail-button {
  display: inline-flex;
}
</style>
