<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600">
        <RouterLink to="/">My Vue Blog</RouterLink>
      </h1>
      <nav class="space-x-4">
        <RouterLink to="/" class="text-gray-700 hover:text-blue-500">Home</RouterLink>
        <RouterLink to="/posts" class="text-gray-700 hover:text-blue-500">Posts</RouterLink>
      </nav>
    </header>

    <main class="p-6">
      <RouterView />
    </main>

    <footer class="text-center text-gray-500 p-4">
      &copy; 2025 My Blog App
    </footer>
  </div>
</template>

<script setup>
</script>

