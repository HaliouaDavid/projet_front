<template>
    <section class="flex flex-col space-y-4 absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div class="flex flex-col justify-center space-y-4 mx-auto w-80">     
            <label for="email" class="cursor-pointer">Adress e-mail</label>
            <input type="email" id="email" class="border border-gray rounded p-3 focus:outline-none focus:border-black" v-model="email" placeholder="mail@provider.com">
            <button @click="forgotPassword()" class="pink-bg text-white rounded p-3">Envoyer</button>
        </div>
        <span class="green-text">Si cette adresse e-mail correspond à un compte existant, un mai sera envoyé</span>
    </section>
</template>

<script>
export default {
	name: "ForgotPassword",

	data() {
		return {
			email: "",
            msgAfterSend: false
		}
	},

 	methods: {
		forgotPassword() {
            this.msgAfterSend = true
		},
	}
}
</script>

<style lang="scss" scoped>

</style>