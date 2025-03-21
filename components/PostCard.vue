<template>
  <div class="bg-white p-4 rounded-2xl shadow-md mb-4 hover:scale-105 transition-all cursor-pointer">
    
    <div class="h-[300px] relative"><img src="https://nuxt-content.netlify.app/img/hello-world.jpg" alt="Hello World" class="absolute w-full h-full object-cover"></div>
    <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
    <p class="text-gray-600 mb-4">{{ post.body }}</p>

    <div class="mb-2">
      <span class="font-semibold">Tags:</span>
      <div class="flex flex-wrap gap-2 mt-1">
        <span 
          v-for="(tag, index) in post.tags" 
          :key="index"
          class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="flex justify-between items-center mt-4 text-sm text-gray-500">
      <div>
        <span class="mr-4">👍 {{ post.reactions.likes }}</span>
        <span>👎 {{ post.reactions.dislikes }}</span>
      </div>
      <div>
        👁️ {{ post.views }} views
      </div>
    </div>

    <div class="text-xs text-gray-400 mt-2">
      Posted by User #{{ post.userId }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: Object
})
</script>
