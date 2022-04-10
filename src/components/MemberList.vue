<script setup>
defineProps({
	membersList: {
		type: Array,
		require: true
	}
})
</script>

<template>
	<div>
		<div class="card" v-for="(member, index) in membersList" :key="index">
			<div class="content">
				<div class="left">
					<img :src="member.img" />
				</div>
				<div class="right">
					<p>
						<b>{{ member.name }} {{ member.surname }}</b
						><br />
						{{ member.studentId }}
					</p>

					<div class="socailLink">
						<a :href="member.socailLink.fb" target="blank"
							><i class="fa fa-facebook"></i
						></a>
						<a :href="member.socailLink.ig" target="blank"
							><i class="fa fa-instagram"></i
						></a>
						<a :href="member.socailLink.github" target="blank"
							><i class="fa fa-github"></i
						></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	max-width: 100%;
	/* height: 150px; */
	margin-bottom: 2%;
	padding: 20px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* align-items: center; */
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.left {
	float: left;
	/* padding-left: 10%; */
	width: 50%;
	display: flex;
	justify-content: center;
	height: 65px;
}
.right {
	float: right;
	/* margin-right: 30%; */
	width: 50%;
	height: 65px;
	/* max-height: 50px; */
	margin-top: -5px;
}
img {
	height: 60px;
	width: 60px;
	border-radius: 50%;
}
.socailLink {
	margin-top: -15px;
}

i {
	margin-right: 5px;
}

@media screen and (max-width: 800px) {
	.left {
		min-width: 100%;
		margin-top: -25px;
	}
	.right {
		min-width: 100%;
		margin-top: 10px;
	}
	.card {
		height: 225px;
	}
}
</style>
