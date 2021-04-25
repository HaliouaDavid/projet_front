<template>
	<section>
		<div class="flex flex-row items-center w-full justify-between mb-4">
			<h1 class="font-bold">Mes listes</h1>
			<hr class="w-36 border-gray-400">
		</div>
		<nuxt-link 
			class="flex flex-row items-center w-full justify-between cursor-pointer mb-4" 
			v-for="(list, index) in lists" :key="index"
			:to="'/tasks/' + list.id"
		>
			<h2>{{list.name}}</h2>
			<div class="notification pink-bg text-white rounded px-2">
				{{list.tasks.length}}
			</div>
		</nuxt-link>

		<div class="flex flex-row items-center w-full cursor-pointer" @click="addList()">
			<img class="mr-4 plus" src="@/assets/plus_pink.svg" alt="plus">
			<span class="font-semibold">Nouvelle liste</span>
		</div>
	</section>
</template>

<script>
import { getListByUserId } from "@/services/lists"
import { getTaskByListId } from "@/services/tasks"

export default {
	name: "List",

	data(){
		return {
			lists: []
		}
	},

	methods: {
		async init() {
			this.lists = await getListByUserId();
		},

		getTask(listId) {
			getTaskByListId(listId)
		},

		addList() {

		}
	},

	mounted() {
		this.init()
	}
}
</script>

<style>

</style>