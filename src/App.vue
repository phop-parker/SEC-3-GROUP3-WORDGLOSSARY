<script setup>
// import BaseWordListPageBtn from './components/BaseWordListPageBtn.vue'
// import BaseRandomPageBtn from './components/BaseRandomPageBtn.vue'
</script>

<template>
	<div>
		<div id="menu">
			<!-- <BaseWordListPageBtn :currentPage="page" />
			<BaseRandomPageBtn :currentPage="page" /> -->
			<router-link :to="{ name: 'WordList' }"
				><div class="menu">Word List Page</div></router-link
			>
			<router-link :to="{ name: 'Random' }"
				><div class="menu">Random Page</div></router-link
			>
		</div>
		<div id="container">
			<div id="content">
				<router-view></router-view>
			</div>
		</div>
		<a href="#" @click="scrollToTop()" class="top">Back to Top &#8593;</a>
	</div>
</template>

<style>
body {
	min-height: 100vh;
	min-width: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		0deg,
		rgba(222, 203, 164, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);

	/* background-image: url("../src/assets/bg1.jpg"); */
	/* background-size: 100%; */
}
#menu {
	/* background-color: aqua;
	height: 40px; */
	margin-top: 50px;
	display: flex;
}
#container {
	/* position: relative; */
	width: 100%;
	min-width: 800px;
	min-height: 480px;
	height: auto;
	background: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	/* content: ''; */
	display: flex;
	/* clear: both; */
	align-items: center;
	justify-content: center;
	padding-top: 30px;
	padding-bottom: 30px;
	/* border: 5px solid #3e5151; */
	/* border: 5px solid #3e5151; */
	/* border: 5px solid #decba4; */
	margin-bottom: 60px;
}

.menu {
	/* background-color: #fff0d3; */
	background-color: #394848;
	height: 35px;
	width: 150px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	/* border: 5px solid #decba4; */
	/* border-bottom: none; */
	margin-left: 20px;
	margin-right: -5px;
	text-align: center;
	padding-top: 12px;
	font-size: 16px;
}
.menu:hover {
	cursor: pointer;
	background-color: #525f5f;

	color: white;
}
a {
	/* color: #c2b18f; */
	color: #ffffff;
	/* color: #759191; */
	text-decoration: none;
}

a.router-link-active div {
	/* border: 5px solid #decba4; */
	border: 5px solid #ffffff;
	border-bottom: 5px solid #394848;
	height: 25px;
	/* border-bottom: 5px solid #fff0d3; */
	/* padding-top: 10px; */
	/* color: #3e5151; */
	/* text-decoration: underline; */
	color: white;
}
a.router-link-active div:hover {
	background-color: #394848;
}
.top {
	position: fixed;
	bottom: 30px;
	right: 30px;
	padding: 10px;
	color: #fff;
	background-color: rgb(62, 81, 81, 0.3);
	border-radius: 20px;
	margin-left: 800px;
	opacity: 10px;
}
.top:hover {
	background-color: #4f6464;
	cursor: pointer;
}
</style>
