<script setup>
import { useRouter } from 'vue-router'
const appRouter = useRouter()
const gotoWordList = () => appRouter.push({ name: 'WordList' })
</script>

<template>
	<div>
		<div>
			<button @click="gotoWordList">Go To Word List Page</button>
		</div>
		<div></div>
	</div>
</template>

<style scoped></style>
