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

// DELETE SELECT
const deleteSelectedWord = async (deleteWordsId) => {
	for (let i = 0; i < deleteWordsId.length; i++) {
		const deleteWordId = deleteWordsId[i]
		const res = await fetch(`http://localhost:5000/fullWords/${deleteWordId}`, {
			method: 'DELETE'
		})
		if (res.status === 200) {
			fullWords.value = fullWords.value.filter((word) => word.id !== deleteWordId)
		} else {
			console.log('error,cannot delete data')
		}
	}
}

//DELETE ALL
const deleteAll = async () => {
	for (let i = 0; i < fullWords.value.length; i++) {
		const deleteWordId = fullWords.value[i].id
		const res = await fetch(`http://localhost:5000/fullWords/${deleteWordId}`, {
			method: 'DELETE'
		})
		if (res.status === 200) {
			console.log(deleteWordId + ' removed')
		} else {
			console.log(deleteWordId + 'error,cannot delete data')
		}
	}
	fullWords.value = []
}
//POST
const hasNullInput = ref(false)
const addFullWord = async (newFullWord) => {
	console.log('out-------')
	console.log('type ' + typeof newFullWord.word)
	console.log('type ' + typeof newFullWord.meaning)
	if (newFullWord.word === undefined || newFullWord.word === '') {
		hasNullInput.value = true
	} else if (newFullWord.meaning === undefined || newFullWord.meaning === '') {
		hasNullInput.value = true
	} else {
		const res = await fetch(`http://localhost:5000/fullWords`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				word: newFullWord.word,
				meaning: newFullWord.meaning
			})
		})
		if (res.status === 201) {
			const addedWord = await res.json()
			fullWords.value.push(addedWord)
		} else {
			console.log('error,cannot add data')
		}
		editingWord.value = {}
		hasNullInput.value = false
	}
}

//PUT
const editingWord = ref({})
const toEditMode = (editWord) => {
	return (editingWord.value = editWord)
}
const updateWord = async (replaceWord) => {
	if (replaceWord.word === undefined || replaceWord.word === '') {
		hasNullInput.value = true
	} else if (replaceWord.meaning === undefined || replaceWord.meaning === '') {
		hasNullInput.value = true
	} else {
		const res = await fetch(`http://localhost:5000/fullWords/${replaceWord.id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				word: replaceWord.word,
				meaning: replaceWord.meaning
			})
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
		hasNullInput.value = false
	}
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
			<p v-show="hasNullInput">Please enter word and meaning</p>
			<div class="form">
				<CreateEditWord
					@addWord="addFullWord"
					:currentWord="editingWord"
					@updateWord="updateWord"
				/>
			</div>
		</div>
		<div class="showWord">
			<ShowWords
				:fullWords="filterWords"
				@delete="deletefullWord"
				@edit="toEditMode"
				@deleteSelected="deleteSelectedWord"
				@deleteAll="deleteAll"
			/>
		</div>
	</div>
</template>

<style scoped>
.showWord {
	/* margin-top: -5%; */
	position: relative;
}
.form {
	/* height: 300px; */
	/* background: linear-gradient(
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	); */
	/* background-color: red; */
	/* border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative; */
	margin-left: 260px;
}
#filterInput {
	/* margin-top: 35px; */
	outline: none;
	border: none;
	/* padding-bottom: 10px; */
	padding-left: 10px;
	width: 30%;
	/* background-color: aqua; */
	border-bottom: 1px solid lightgray;
}
::placeholder {
	color: lightgray;
}
#filterWord {
	min-width: 590px;
	margin-bottom: 15px;
	/* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
	/* background-color: aqua; */
	display: flex;
}
i {
	color: lightgray;
	/* margin-left: 200px; */
	margin-top: 10px;
}
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 100px 0;
}
.col-1 {
	/* flex-basis: 50%; */
	position: relative;
	margin-left: 50px;
}
.col-2 {
	position: relative;
	flex-basis: 60%;
	display: flex;
	align-items: center;
}
</style>
