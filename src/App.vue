<script setup>
import BaseWordListPageBtn from './components/BaseWordListPageBtn.vue'
import BaseRandomPageBtn from './components/BaseRandomPageBtn.vue'
</script>

<template>
	<div>
		<router-view></router-view>
		<BaseWordListPageBtn />
		<BaseRandomPageBtn />
	</div>
</template>

<style scoped></style>
