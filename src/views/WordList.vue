<script setup>
import { onBeforeMount, ref } from 'vue'
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
		<CreateEditWord
			@addWord="addFullWord"
			:currentWord="editingWord"
			@updateWord="updateWord"
		/>
		<ShowWords
			:fullWords="fullWords"
			@delete="deletefullWord"
			@edit="toEditMode"
		/>
	</div>
</template>

<style scoped></style>
