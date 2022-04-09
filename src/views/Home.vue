<script setup></script>

<template>
	<div>
		<div class="row">
			<div class="col-1">
				<h2>
					Welcome To ,<br />
					Vocab Grossary <br />Web Application
				</h2>
				<h3>The used key is always bright.(Practice makes perfect)</h3>
				<p>
					Vocab Glossary is an Web Application created for vocabulary review. Which
					will be able to randomly the words from the list recorded along with being
					able to write the meanings of random words to check for accuracy and review
					memory.
				</p>
				<button>Let's Add Words</button>
			</div>
			<div class="col-2">
				<img src="../assets/stack.png" class="stack" />
				<div class="color-box"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 100px 0;
}
.col-1 {
	flex-basis: 45%;
	position: relative;
	margin-left: 50px;
}
.col-1 h2 {
	font-size: 45px;
}
.col-1 h3 {
	font-size: 25px;
	color: #999999;
	font-weight: 100;
	margin: 20px 0 10px;
}
.col-1 p {
	font-size: 15px;
	font-weight: 100;
	color: #4e4e4e;
	margin: 30px 0;
	width: 450px;
}
button {
	width: 150px;
	border: 0;
	padding: 12px 10px;
	outline: none;
	color: white;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	border-radius: 6px;
	cursor: pointer;
}
button:hover {
	background: linear-gradient(
		90deg,
		rgb(102, 137, 137) 0%,
		rgb(50, 66, 66) 100%
	);
}
.col-1:after {
	content: '';
	width: 10px;
	height: 50%;
	background: linear-gradient(
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	position: absolute;
	left: -40px;
	top: 20px;
}

.col-2 {
	position: relative;
	flex-basis: 50%;
	display: flex;
	align-items: center;
}
.col-2 .stack {
	width: 80%;
	/* right: 10%; */
	position: relative;
	right: -10%;
}
.color-box {
	position: absolute;
	right: 25%;
	top: 0;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	border-radius: 50%;
	height: 100%;
	width: 50%;
	z-index: -1;
	transform: translateX(150px);
}
</style>
