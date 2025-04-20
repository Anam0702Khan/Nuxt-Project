<template>
  <div class="min-h-screen bg-gray-200">
    <header class="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">
        <NuxtLink to="/"> Blog</NuxtLink>
      </h1>
      <nav class="space-x-4">
        <NuxtLink 
          to="/" 
          class="text-gray-700 hover:text-gray-900" 
          exact-active-class="font-bold underline"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/posts" 
          class="text-gray-700 hover:text-gray-900" 
          exact-active-class="font-bold underline"
        >
          Posts
        </NuxtLink>
         <NuxtLink 
          to="/login" 
          class="text-gray-700 hover:text-gray-900" 
          exact-active-class="font-bold underline"
        >
          Login
        </NuxtLink>
      </nav>
    </header>

    <main class="p-6">
      <NuxtPage />
    </main>

   <footer class="py-6  text-black text-center">
  <p>&copy; 2025 Blog App. All rights reserved.</p>
  <p class="text-sm">Built with ❤️ using Vue & Tailwind CSS</p>
</footer>

  </div>
</template>

<script setup>
</script>
