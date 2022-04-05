<script setup>
import { onBeforeMount, ref } from 'vue'
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
const randomItem = ref('')
const currentRand = ref(0)
const randomWordCount = ref(0)
const randomWord = () => {
	const newRand = Math.floor(Math.random() * fullWords.value.length)
	currentRand.value = fullWords.value.indexOf(randomItem.value)
	// currentRand.value === newRand ? randomWord() : randomItem.value = fullWords.value[newRand]
	if (currentRand.value === newRand) {
		randomWord()
	} else {
		randomItem.value = fullWords.value[newRand]
		randomWordCount.value = randomWordCount.value + 1
		console.log(randomWordCount.value)
	}
	currentRand.value = newRand
	resetWhenRandom()
	disCheckBtn.value = false
}
const resetWhenRandom = () => {
	msg.value = ''
	isShow.value = false
	wrongAnsCount.value = 0
	answer.value = ''
}
const answer = ref('')
const isCorrect = ref(true)
const wrongAnsCount = ref(0)
const correctAnsCount = ref(0)
const msg = ref('')
const disCheckBtn = ref(false)
const checkAnswer = () => {
	if (randomItem.value.meaning === answer.value) {
		isCorrect.value = true
		correctAnsCount.value = correctAnsCount.value + 1
		msg.value = 'Your answer is correct!'
		disCheckBtn.value = true
	} else {
		isCorrect.value = false
		wrongAnsCount.value = wrongAnsCount.value + 1
		msg.value = 'Oops! You are wrong. Try again.'
	}
}
const isShow = ref(false)
const meaningShow = () => {
	if (isShow.value === false) {
		isShow.value = true
	}
	disCheckBtn.value = true
}
</script>

<template>
	<div>
		<h2>Random</h2>
		<h2>{{ randomItem.word }}</h2>
		<p v-show="fullWords.length == 1" id="oneWord">
			You have only 1 Word ,
			<br />please go to word-list page and enter more word.
		</p>
		<p v-show="randomItem == 0 && fullWords.length > 1" id="welcomeRand">
			click random button to random 1 word from
			<b>{{ fullWords.length }}</b> words
		</p>

		<div v-show="randomItem.length != 0">
			<div>
				<label>meaning :</label>
				<input placeholder="place the meaning" v-model="answer" />
			</div>
		</div>
		<div>
			<button
				class="checkBtn"
				@click="checkAnswer()"
				v-show="randomItem.length != 0"
				:disabled="disCheckBtn"
			>
				Check answer
			</button>
			<!-- <button class="checkBtn" @click="checkAnswer()" v-show="randomItem.length != 0" :disabled="isShow==true">Check answer</button> -->
			<button v-show="fullWords.length > 1" id="randomBtn" @click="randomWord()">
				Random
			</button>
		</div>
		<div>
			<p :style="isCorrect ? 'color:green' : 'color:red'">{{ msg }}</p>
			<p v-show="wrongAnsCount > 0 && !isCorrect">
				"You enter wrong answer :
				<b>{{ wrongAnsCount }}</b> times already."
			</p>
			<button
				v-show="wrongAnsCount >= 3 && isCorrect === false"
				@click="meaningShow"
				class="checkBtn"
			>
				Show answer
			</button>
			<h2 v-show="isShow">{{ randomItem.meaning }}</h2>
		</div>
	</div>
</template>

<style scoped></style>
