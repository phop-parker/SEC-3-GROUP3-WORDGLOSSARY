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
					<!-- <div class="input-box"></div> -->
				</div>
			</div>
		</form>
	</div>
</template>

<style scoped>
form {
	width: 500px;
	/* padding-top: px; */
	display: flex;
	margin-bottom: 15px;
}
/* form .input-boxes {
	margin-top: 50px;
} */
form .input-box {
	height: 40px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* align-items: center; */

	/* margin-bottom: 20px; */
}
.input-box input {
	height: 100%;
	width: 250px;
	/* font-size: 14px; */
	outline: none;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.329);
	/* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
	margin-right: 15px;
	padding-left: 8px;
}
.input-box input:focus,
.input-box input:valid {
	border-color: #3e5151;
}
button {
	color: #fff;
	border-radius: 5px;
	/* height: 30px; */
	/* background-color: #3e5151; */
	background-color: #9e8e6c;
	/* margin-top: 10px; */
	height: 40px;
}
button:hover {
	cursor: pointer;
	/* background-color: #394848; */
	background-color: #b3a17b;
}
/* ::placeholder {
	color: lightgray;
} */
</style>
