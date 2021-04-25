<template>
	<section class="w-72 h-screen fixed white-bg p-4 border-r-2 border-gray-200">
		<div class="flex flex-col w-full space-y-6">
			<div class="flex flex-row items-center">
				<img src="@/assets/home.svg" alt="home">
				<span class="font-bold">bensabat.ben@gmail.com</span>
			</div>
			
			<List/>
		</div>
	</section>
</template>

<script>
import List from "@/components/list"
export default {
	name: "SideBar",
	components: {
		List
	}
}
</script>

<style lang="scss" scoped>

.notification {
	padding-right: 6px;
    padding-left: 6px;
}

</style>