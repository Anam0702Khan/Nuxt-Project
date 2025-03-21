<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/postsStore'
import PostCard from '@/components/PostCard.vue'

const postsStore = usePostsStore()
const { posts, fetchPosts, loading } = postsStore

onMounted(() => {
  fetchPosts()
})
</script>

index.vue
<template>
    <div
    class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('/img/bg-img.jpg')]"
  >
     <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-3/4 md:w-1/2">
    <h1 class="text-5xl md:text-6xl font-serif mb-10 text-black">Web Reinvent Blog</h1>
  </div>
  </div>
</template>