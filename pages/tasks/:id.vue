<template>
	<section class="space-y-2">
		<h1 class="text-3xl font-bold pt-8 pl-4 mb-8">Prochaine tâches</h1>
		<hr class="border-gray-400 mr-4">
		<TasksGroup :tasks="tasks"/>
	</section>
</template>

<script>
import TasksGroup from "@/components/TasksGroup"
import { getTaskByListId } from "~/services/tasks"

export default {
	components: { TasksGroup },

	data() {
		return {
			tasks: []
		}
	},
	
	async mounted(){
		this.tasks = await getTaskByListId(this.$route.params.id)
	}
}
</script>

<style>

</style>