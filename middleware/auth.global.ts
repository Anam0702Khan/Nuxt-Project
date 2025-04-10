import { useAuthStore } from "../stores/useAuthStore";


export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()

    const protectedRoutes = ['/posts']

    if (protectedRoutes.includes(to.path) && !auth.loggedInUser) {
        if (process.client) {
            alert('Please login first!')
          }
        return navigateTo('/login')
      }
})