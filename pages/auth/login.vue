<template>
	<div class="flex flex-col w-96 absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 space-y-4">
		<label for="email" class="cursor-pointer">Adress e-mail</label>
		<input type="email" id="email" class="border border-gray rounded p-3 focus:outline-none focus:border-black" v-model="email" placeholder="mail@provider.com">		

		<label for="password" class="cursor-pointer">Mot de passe</label>
		<input type="password" id="password" class="border border-gray rounded p-3 focus:outline-none focus:border-black " v-model="password" placeholder="password">
		<div class="pink-text flex flex-col items-center space-y-6">
			<span class="red-text" v-show="wrongEmailOrPassword">identifiants incorrect</span>
			
			<button @click="login()" class="w-full pink-bg text-white rounded p-3">Connexion</button>

			<nuxt-link to="/auth/forgotPassword">J'ai oublié mon mot de passe</nuxt-link>
			<nuxt-link to="/auth/register">Pas encore de compte ? Inscrivez-vous !</nuxt-link>
		</div>
	</div>
</template>

<script>
import {loginWithEmailAndPassword} from "~/services/auth";
import {getUserId} from "~/services/user";
export default {
	name: "Login",

	data() {
		return {
			email: "",
			password: "",
			wrongEmailOrPassword: false
		}
	},

 	methods: {
		async login() {
			try {
				this.wrongEmailOrPassword = false;
			
				let response = await loginWithEmailAndPassword(this.email, this.password)
				if(response?.data?.token){
					localStorage.setItem('token', response.data.token);
	
					response = await getUserId(this.email);
					localStorage.setItem('userId', response.data.id);
					this.$emit("log-in", true)
					this.$router.push("/")
				}
			} catch {	
				this.wrongEmailOrPassword = true;
			}
		},
	}
}
</script>

<style lang="scss" scoped>

</style>