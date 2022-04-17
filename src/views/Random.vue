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
		<div class="row">
			<div class="col-1">
				<img src="../assets/books.jpg" />
				<img src="../assets/books.jpg" />
			</div>
			<div class="col-2">
				<p v-show="randomWordCount > 0" class="count">
					Answer Correct {{ correctAnsCount }} from {{ randomWordCount }} Random
				</p>
				<div class="random-card">
					<h4>Random Word</h4>
					<h2>{{ randomItem.word }}</h2>
					<div v-show="fullWords.length == 1">
						<p>
							You have only 1 Word ,
							<br />Please go to Word List page and enter more word.
						</p>
						<router-link :to="{ name: 'WordList' }"
							><button class="goToWordList">Let's Add More Words</button></router-link
						>
					</div>

					<p v-show="randomItem == 0 && fullWords.length > 1">
						click random button to random 1 word from
						<b>{{ fullWords.length }}</b> words
					</p>
					<div class="input-and-btn">
						<div v-show="randomItem.length != 0 && isShow === false">
							<input placeholder="Place the meaning..." v-model="answer" />
						</div>
						<h2 v-show="isShow" class="meaning">{{ randomItem.meaning }}</h2>
						<div class="check-and-show-btn">
							<button
								class="inputBtn"
								@click="checkAnswer()"
								v-show="randomItem.length != 0"
								:disabled="disCheckBtn"
							>
								Check
							</button>
							<button
								v-show="randomItem.length != 0"
								:disabled="wrongAnsCount < 3 || isCorrect === true || isShow === true"
								@click="meaningShow"
								class="inputBtn"
							>
								Show answer
							</button>
						</div>
					</div>

					<div>
						<p :style="isCorrect ? 'color:green' : 'color:red'" class="alert">
							{{ msg }}
						</p>
						<p v-show="wrongAnsCount > 0 && !isCorrect">
							"You enter wrong answer :
							<b>{{ wrongAnsCount }}</b> times already."
						</p>
					</div>
					<div>
						<button
							class="random-btn"
							v-show="fullWords.length > 1"
							@click="randomWord()"
						>
							Random
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.count {
	margin-left: 58%;
	font-size: 14px;
}
.goToWordList {
	width: 200px;
	border: 0;
	padding: 10px 8px;
	outline: none;
	color: white;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	border-radius: 6px;
	cursor: pointer;
	margin-top: 15px;
}
.goToWordList:hover {
	background: linear-gradient(
		90deg,
		rgb(102, 137, 137) 0%,
		rgb(50, 66, 66) 100%
	);
}
h4 {
	margin-bottom: 20px;
	margin-top: 15px;
}
.meaning {
	color: green;
}
.random-card h2 {
	background-color: rgb(247, 247, 247);
}
.alert {
	margin-bottom: -15px;
}
.random-btn {
	color: #fff;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	margin-top: 8px;
	/* height: 35px; */
	border-radius: 6px;
	outline: none;
	border: 0;
	padding: 8px 8px;
}
.random-btn:hover {
	cursor: pointer;
	background: linear-gradient(
		90deg,
		rgb(102, 137, 137) 0%,
		rgb(50, 66, 66) 100%
	);
}
.input-and-btn input {
	outline: none;
	width: 60%;
	border: 1px solid rgba(0, 0, 0, 0.329);
	border-radius: 5px;
	padding: 5px;
	margin-top: 15px;
}
.inputBtn {
	border-radius: 6px;
	margin: 5px;
	margin-top: 10px;
}
.inputBtn:hover {
	background-color: rgb(244, 244, 244);
}
.random-card {
	width: 100%;
	height: 500px;
	border-radius: 10px;
	text-align: center;
	padding-top: 15%;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.col-1 {
	flex-basis: 50%;
	position: relative;
}
.col-1 img {
	width: 100%;
	height: 100%;
}
.col-2 {
	position: relative;
	flex-basis: 50%;
	display: block;
	align-items: center;
}
@media screen and (max-width: 800px) {
	.count {
		margin-left: 0px;
		font-size: 13px;
	}
}
</style>
