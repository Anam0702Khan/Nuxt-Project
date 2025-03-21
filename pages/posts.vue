<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Posts</h1>

    <div v-if="loading" class="text-center text-lg">Loading posts...</div>
    <div v-else>
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

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