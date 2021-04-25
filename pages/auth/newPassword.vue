<template>
    <section class="flex flex-col space-y-4 absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div class="flex flex-col w-96 justify-center space-y-4 mx-auto">     
            <label for="password" class="cursor-pointer">Nouveau mot de passe</label>
            <input 
                class="border border-gray rounded p-3 focus:outline-none focus:border-black"
                placeholder="mail@provider.com"
                v-model="password"
                type="password" 
                id="password" 
            >

            <label for="confirmPassword" class="cursor-pointer">Confirmer le nouveau mot de passe</label>
            <input 
                class="border border-gray rounded p-3 focus:outline-none focus:border-black"
                placeholder="mail@provider.com"
                v-model="confirmPassword" 
                type="password" 
                id="confirmPassword" 
            >
            <button @click="newPassword()" class="pink-bg text-white rounded p-3">Envoyer</button>
        </div>
    </section>
</template>

<script>
export default {
	name: "NewPassword",

	data() {
		return {
			password: "",
            confirmPassword: ""
		}
	},

 	methods: {
		newPassword() {
		},
	}
}
</script>

<style lang="scss" scoped>

</style>