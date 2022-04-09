<script setup></script>

<template>
	<div>
		<div class="container">
			<div class="navBar">
				<img src="./assets/bookShelf.ico" class="logo" />
				<nav>
					<ul>
						<li><router-link :to="{ name: 'Home' }">Home</router-link></li>
						<li><router-link :to="{ name: 'WordList' }">Word List</router-link></li>
						<li><router-link :to="{ name: 'Random' }">Random</router-link></li>
						<li><router-link :to="{ name: 'AboutUs' }">About Us</router-link></li>
					</ul>
				</nav>
			</div>
			<div class="main">
				<router-view></router-view>
			</div>
			<a href="#" class="top">&#8593;</a>
		</div>
	</div>
</template>

<style scoped>
body {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}

.main {
	margin-bottom: 5%;
}
.container {
	width: 100%;
	min-height: 100vh;
	padding-left: 8%;
	padding-right: 8%;
	box-sizing: border-box;
	overflow: hidden;
}
.navBar {
	width: 100%;
	display: flex;
	align-items: center;
}
.logo {
	width: 40px;
	margin: 30px 0;
}
nav {
	flex: 1;
	text-align: right;
}
nav ul li {
	list-style: none;
	display: inline-block;
	margin-right: 30px;
}
nav ul li a {
	text-decoration: none;
	color: #000;
	font-size: 14px;
}
nav ul li a:hover {
	color: #719999;
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
	text-decoration: none;
}
.top:hover {
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	cursor: pointer;
}
</style>
