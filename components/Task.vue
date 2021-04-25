<template>
    <section class="space-y-2">
        <div class="flex flex-row justify-between mr-4 items-center">
            <div class="flex flex-row items-center space-x-4">
                <input type="checkbox" :checked="task.checked" @click="isChecked(task.id)">
                <div class="flex flex-col" :class="task.checked ? 'line-through' : null">
                    <h1>{{task.name}}</h1>
                    <p class="text-sm text-gray-500"> {{index}} sur {{length}} • Echeance: {{ $moment(task.date).fromNow()}} • {{task.note}}</p>
                </div>
            </div>
            <div class="cursor-pointer" @click="deleteTask()">
                <img src="@/assets/delete.svg" alt="trash">
            </div>
        </div>
        <hr class="border-gray-400 mr-4">
    </section>
</template>

<script>
import { updateCheckTask, deleteTask } from "@/services/tasks"

export default {
    name: "Task",

    props: ["task", "index", "length"],

    methods: {
        isChecked(taskId) {
            updateCheckTask(taskId)
        },

        deleteTask() {
            this.$emit("remove-task", this.index - 1)
			deleteTask(this.task.id)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>