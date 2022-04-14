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

						<input
							type="text"
							id="meaning"
							placeholder="Enter meaning of word..."
							v-model="newFullWord.meaning"
							required
						/>

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
			</div>
		</form>
	</div>
</template>

<style scoped>
form {
	width: 100%;
}
form .input-box {
	height: 40px;
	width: 100%;
}
.input-box input {
	height: 100%;
	width: 200px;
	outline: none;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.329);
	margin-right: 15px;
	padding-left: 8px;
}
.input-box input:focus {
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}
button {
	color: #fff;
	border-radius: 5px;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	height: 40px;
	border-radius: 6px;
	outline: none;
	border: 0;
}
button:hover {
	cursor: pointer;
	background: linear-gradient(
		90deg,
		rgb(102, 137, 137) 0%,
		rgb(50, 66, 66) 100%
	);
}
@media screen and (max-width: 600px) {
	.input-boxes {
		width: 470px;
		display: block;
	}
	button {
		margin-top: 10px;
	}
}
</style>
