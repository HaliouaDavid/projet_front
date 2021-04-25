<template>
	<section class="space-y-2">
		<div v-for="(task, index) in tasks" :key="index">
			<Task :task="task" :index="index + 1" :length="tasks.length" @remove-task="removeTask" />
		</div>
		<div class="flex flex-row space-x-4 py-3 items-align">
			<img src="~/assets/plus.svg" alt="" @click="createTask()">
			<input class="text-gray-400 " placeholder="Ajouter une tâche..." v-model="addTask"/>
		</div>
        <hr class="border-gray-400 mr-4">
	</section>
</template>

<script>
import Task from "@/components/Task"
import {addNewTask} from "@/services/tasks"

export default {
	name: "TasksGroup",

	props: ["tasks"],
	
	components: {
		Task
	},

	data() {
		return {
			addTask: ""
		}
	},

	methods: {
		removeTask(index) {
			this.tasks.splice(index, 1);
		},

		createTask() {
			addNewTask(this.addTask)
		}
	}
}
</script>

<style>

</style>