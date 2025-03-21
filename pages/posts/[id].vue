<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8" v-if="!pending && post">
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <img src="https://nuxt-content.netlify.app/img/hello-world.jpg" class="w-full rounded-xl mb-4" alt="Post image" />
    <p class="text-gray-700 mb-4">{{ post.body }}</p>

    <div class="mb-4">
      <strong>Tags:</strong>
      <div class="flex flex-wrap gap-2 mt-2">
        <span v-for="(tag, index) in post.tags" :key="index" class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="flex justify-between items-center text-sm text-gray-500 mb-2">
      <div>
        👍 {{ post.reactions.likes }} / 👎 {{ post.reactions.dislikes }}
      </div>
      <div>
        👁️ {{ post.views }} views
      </div>
    </div>

    <div class="text-xs text-gray-400">
      Posted by User #{{ post.userId }}
    </div>
  </div>
<div v-else class="text-center text-lg p-6">Loading post details...</div>

</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: post } = useFetch(`https://dummyjson.com/posts/${route.params.id}`, {
  cache: 'default',
  key: `post-${route.params.id}`,
  maxAge: 900,
  onResponse({ request, response }) {
    console.log('Fetched from network:', request)
  }
})

</script>
