<template>
  <div class="min-h-screen flex items-center justify-center ">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form @submit.prevent="handleSignup">
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="name">Name</label>
          <input type="text" id="name" v-model="name" class="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="email">Email</label>
          <input type="email" id="email" v-model="email" class="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 mb-1" for="password">Password</label>
          <input type="password" id="password" v-model="password" class="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" required />
        </div>
        <button type="submit" class="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">Create Account</button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-500">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-600 hover:underline">Login</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

function handleSignup() {
  console.log('Signup:', { name: name.value, email: email.value, password: password.value })
}
</script>
