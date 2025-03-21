import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const loading = ref(false)

  const fetchPosts = async () => {
    loading.value = true
    try {
      const res = await fetch('https://dummyjson.com/posts')
      const data = await res.json()
      // console.log(data,"data")
      posts.value = data.posts
      // console.log(posts.value)
      console.log(JSON.stringify(posts.value))
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      loading.value = false
    }
  }

  return { posts, fetchPosts, loading }
})
