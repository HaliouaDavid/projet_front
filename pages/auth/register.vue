<template>
	<div class="flex flex-col w-96 absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 space-y-4">
		<label for="email" class="cursor-pointer">Adress e-mail</label>
		<input type="email" id="email" class="border border-gray rounded p-3 focus:outline-none focus:border-black" v-model="email" placeholder="mail@provider.com">		
        <span class="red-text" v-show="wrongEmail">Cette adresse e-mail est déjà utilisée</span>

		<label for="password" class="cursor-pointer">Mot de passe</label>
		<input type="password" id="password" class="border border-gray rounded p-3 focus:outline-none focus:border-black " v-model="password" placeholder="password">

		<label for="password" class="cursor-pointer">Répéter le mot de passe</label>
		<input type="password" id="password" class="border border-gray rounded p-3 focus:outline-none focus:border-black " v-model="password" placeholder="password">
        <span class="red-text" v-show="wrongVerificatePassword">Les mots de passe ne correspondent pas</span>

		<div class="pink-text flex flex-col items-center space-y-6">
			<button @click="register()" class="w-full pink-bg text-white rounded p-3">Inscription</button>
        	<span class="green-text" v-show="emailSend">Un email de confirmation vous a été envoyé</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Register",

	data() {
		return {
			email: "",
			password: "",
			verificatePassword: "",
			wrongEmail: false,
			wrongVerificatePassword: false,
			emailSend: false
		}
	},

 	methods: {
		register() {
			this.wrongEmailOrPassword = true;
		},
	}
}
</script>

<style lang="scss" scoped>

</style>