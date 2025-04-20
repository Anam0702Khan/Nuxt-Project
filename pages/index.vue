<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/postsStore'
import PostCard from '@/components/PostCard.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

const postsStore = usePostsStore()
const { posts, fetchPosts, loading } = postsStore

onMounted(() => {
  fetchPosts()
  AOS.init({
    duration: 1000, 
    once: true,     
  })
})

</script>

<template>
  <div>
    <div
    class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('/img/bg-img.jpg')]"
    data-aos="fade-down"
  >
     <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-3/4 md:w-1/2">
    <h1 class="text-5xl md:text-6xl font-serif mb-10 text-black" data-aos="zoom-in">Blog</h1>
     <p class="text-lg text-gray-600" data-aos="flip-left">Explore insights, tutorials, and stories from the world of web development, tech, and more.</p>
  </div>
  </div>
  <section class="py-10 px-6 md:px-20 bg-gray-100">
  <h2 class="text-2xl font-semibold mb-6 text-center" data-aos="zoom-in">Latest Posts</h2>
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    <PostCard v-for="post in posts.slice(0, 3)" :key="post.id" :post="post"  data-aos="fade-up" />
  </div>
  <div class="text-center mt-8">
  <NuxtLink to="/posts">
    <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all">
      See More Posts →
    </button>
  </NuxtLink>
</div>

</section>
  </div>
  
</template>