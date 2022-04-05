<script setup>
import { ref, computed } from 'vue'
defineEmits(['addWord', 'updateWord'])
const props = defineProps({
	currentWord: {
		type: Object,
		default: {}
	}
})
const newFullWord = computed(() => {
	return {
		id: props.currentWord.id,
		word: props.currentWord.word,
		meaning: props.currentWord.meaning
	}
})
</script>

<template>
	<div>
		<form id="myForm" @submit.prevent>
			<div class="add-form">
				<div class="input-boxes">
					<div class="input-box">
						<input
							type="text"
							id="word"
							placeholder="Enter you word..."
							v-model="newFullWord.word"
							required
							autofocus
						/>
					</div>
					<div class="input-box">
						<input
							type="text"
							id="meaning"
							placeholder="Enter meaning of word..."
							v-model="newFullWord.meaning"
							required
						/>
					</div>
					<button
						v-if="newFullWord.id > 0"
						type="submit"
						@click="$emit('updateWord', newFullWord)"
					>
						Save
					</button>
					<button v-else type="submit" @click="$emit('addWord', newFullWord)">
						Add
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<style scoped>
form {
	width: 500px;
	padding-bottom: 20px;
}
form .input-boxes {
	margin-top: 80px;
}
form .input-box {
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}
.input-box input {
	height: 100%;
	width: 100%;
	font-size: 16px;
	outline: none;
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.input-box input:focus,
.input-box input:valid {
	border-color: #3e5151;
}
</style>
