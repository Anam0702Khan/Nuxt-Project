<template>
  <div class="min-h-screen bg-gray-200">
    <header class="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">
        <NuxtLink to="/">Web Reinvent Blog</NuxtLink>
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

    <footer class="text-center text-gray-500 p-4">
      &copy; 2025 Web Reinvent Blog App
    </footer>
  </div>
</template>

<script setup>
</script>
