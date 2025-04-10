import {defineStore} from "pinia"

export const useAuthStore = defineStore('auth',{
    state: () => ({
        users: [], 
        loggedInUser: null,
        token: null,
      }),

      actions : {
        signup( name,email,password){
            const exists = this.users.find(user => user.email === email)
            if(exists) throw new Error("user allready exists")
            this.users.push({ name,email,password})
        console.log(this.users,"users")
        },
        login(email,password){
            const user = this.users.find(user => user.email == email && user.password == password)
            if(!user) throw new Error("Invalid credentials")
            this.loggedInUser = user
            this.token = '123$987#token'
        },
        logout(){
            this.token= null,
            this.loggedInUser= null
        }
      },
      persist: true
})