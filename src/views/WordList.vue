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

const hasNullInput = ref(false)
const checkNullInput = (word, mode) => {
	if (word.word === undefined || word.word === '') {
		hasNullInput.value = true
		setTimeout(checkNullToggle, 3000)
	} else if (word.meaning === undefined || word.meaning === '') {
		hasNullInput.value = true
		setTimeout(checkNullToggle, 3000)
	} else if (mode === 'addMode') {
		addFullWord(word)
	} else if (mode === 'editMode') {
		updateWord(word)
	}
}
const checkNullToggle = () =>
	hasNullInput.value === true
		? (hasNullInput.value = false)
		: (hasNullInput.value = true)

//POST
const isAddSuccess = ref(false)
const addFullWord = async (newFullWord) => {
	checkDupplicateWord(newFullWord)
	if (isDupplicateWord.value === false) {
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
			isAddSuccess.value = true
			const addedWord = await res.json()
			fullWords.value.push(addedWord)
		} else {
			console.log('error,cannot add data')
		}
		editingWord.value = {}
		setTimeout(toggleAddSuccess, 3000)
	} else {
		setTimeout(checkDuplicateToggle, 3000)
	}
}
const toggleAddSuccess = () =>
	isAddSuccess.value === false
		? (isAddSuccess.value = true)
		: (isAddSuccess.value = false)

const isDupplicateWord = ref(false)
const checkDupplicateWord = (word) => {
	if (fullWords.value.length <= 0) {
		isDupplicateWord.value = false
	} else {
		isDupplicateWord.value = fullWords.value.some(
			(w) =>
				w.word.toLowerCase() == word.word.toLowerCase() &&
				w.meaning.toLowerCase() == word.meaning.toLowerCase()
		)
	}
}

const checkDuplicateToggle = () =>
	isDupplicateWord.value === true
		? (isDupplicateWord.value = false)
		: (isDupplicateWord.value = true)

//PUT
const editingWord = ref({})
const toEditMode = (editWord) => {
	return (editingWord.value = editWord)
}
const updateWord = async (replaceWord) => {
	checkDupplicateWord(replaceWord)
	if (isDupplicateWord.value == false) {
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
	} else {
		setTimeout(checkDuplicateToggle, 3000)
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

			<div class="form">
				<CreateEditWord
					@addWord="checkNullInput($event, 'addMode')"
					:currentWord="editingWord"
					@updateWord="checkNullInput($event, 'editMode')"
				/>
			</div>
		</div>
		<p class="fail-alert" v-show="hasNullInput">
			Please enter both word and meaning input.
		</p>
		<p class="fail-alert" v-show="isDupplicateWord">
			You already have this word.
		</p>
		<p class="success-alert" v-show="isAddSuccess">
			Add new word and meaning successfully.
		</p>
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
.success-alert {
	color: green;
	margin-left: 56%;
}
.fail-alert {
	color: red;
	margin-left: 56%;
}
.showWord {
	position: relative;
}
.form {
	margin-left: 260px;
}
#filterInput {
	outline: none;
	border: none;
	padding-left: 10px;
	width: 30%;
	border-bottom: 1px solid lightgray;
}
::placeholder {
	color: lightgray;
}
#filterWord {
	min-width: 590px;
	margin-bottom: 15px;
	display: flex;
}
i {
	color: lightgray;
	margin-top: 10px;
}
@media screen and (max-width: 800px) {
	#filterWord {
		display: block;
	}
	#filterInput {
		width: 400px;
	}
	.form {
		margin-left: 0px;
		margin-top: 2%;
	}
	.showWord {
		margin-top: 15%;
	}
	.success-alert {
		margin-left: 80px;
		margin-top: 15px;
		margin-bottom: -38px;
	}
	.fail-alert {
		margin-left: 80px;
		margin-top: 15px;
		margin-bottom: -38px;
	}
}
</style>
