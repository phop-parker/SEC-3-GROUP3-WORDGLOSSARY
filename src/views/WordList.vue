<script setup>
import { onBeforeMount, ref, computed } from 'vue'
import ShowWords from '../components/ShowWords.vue'
import CreateEditWord from '../components/CreateEditWord.vue'

const fullWords = ref([])
//GET
const getFullWords = async () => {
	const res = await fetch('http://localhost:5000/fullWords')
	if (res.status === 200) {
		fullWords.value = await res.json()
	} else {
		console.log('error,cannot get data')
	}
}
onBeforeMount(async () => await getFullWords())

const keyWord = ref('')
const filterWords = computed(() => {
	// getFullWords()
	return fullWords.value.filter(
		(fullWord) =>
			fullWord.word.toLowerCase().includes(keyWord.value.toLowerCase()) ||
			fullWord.meaning.includes(keyWord.value)
	)
})

//DELETE
const deletefullWord = async (deleteWordId) => {
	const res = await fetch(`http://localhost:5000/fullWords/${deleteWordId}`, {
		method: 'DELETE'
	})
	if (res.status === 200) {
		fullWords.value = fullWords.value.filter((word) => word.id !== deleteWordId)
	} else {
		console.log('error,cannot delete data')
	}
}
//POST
const addFullWord = async (newFullWord) => {
	const res = await fetch(`http://localhost:5000/fullWords`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ word: newFullWord.word, meaning: newFullWord.meaning })
	})
	if (res.status === 201) {
		const addedWord = await res.json()
		fullWords.value.push(addedWord)
	} else {
		console.log('error,cannot add data')
	}
}

//PUT
const editingWord = ref({})
const toEditMode = (editWord) => {
	return (editingWord.value = editWord)
}
const updateWord = async (replaceWord) => {
	const res = await fetch(`http://localhost:5000/fullWords/${replaceWord.id}`, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ word: replaceWord.word, meaning: replaceWord.meaning })
	})
	if (res.status === 200) {
		const editedWord = await res.json()
		fullWords.value = fullWords.value.map((word) =>
			word.id === editedWord.id
				? { ...word, word: editedWord.word, meaning: editedWord.meaning }
				: word
		)
	} else {
		console.log('error,cannot edit data')
	}
	editingWord.value = {}
}
</script>

<template>
	<div>
		<div id="filterWord">
			<input
				id="filterInput"
				placeholder="Filter by Word or Meanning..."
				v-model="keyWord"
			/>
			<i class="fa fa-search"></i>
		</div>

		<CreateEditWord
			@addWord="addFullWord"
			:currentWord="editingWord"
			@updateWord="updateWord"
		/>
		<ShowWords
			:fullWords="filterWords"
			@delete="deletefullWord"
			@edit="toEditMode"
		/>
	</div>
</template>

<style scoped>
#filterInput {
	/* margin-top: 35px; */
	outline: none;
	border: none;
	padding-bottom: 10px;
	padding-left: 10px;
}
::placeholder {
	color: lightgray;
}
#filterWord {
	min-width: 590px;
	margin-bottom: 15px;
	/* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
	border-bottom: 1px solid lightgray;
}
i {
	color: lightgray;
	margin-left: 400px;
}
</style>
