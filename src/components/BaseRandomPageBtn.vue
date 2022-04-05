<script setup>
import { useRouter } from 'vue-router'
const appRouter = useRouter()
const goToRandom = () => appRouter.push({ name: 'Random' })
// const goToRandom = () => appRouter.go(-1)
</script>

<template>
	<div>
		<button @click="goToRandom">Go To Random Word Page</button>
	</div>
</template>

<style scoped></style>
