<script setup>
const members = [
	{
		name: 'Sarida',
		surname: 'Buakaew',
		studentId: '63130500112',
		img: '../src/assets/63130500112.png',
		socailLink: {
			ig: 'https://www.instagram.com/sarimintt/',
			fb: 'https://web.facebook.com/sarixmint',
			github: 'https://github.com/sarimintt'
		}
	},
	{
		name: 'Sarisa',
		surname: 'Phulakorn',
		studentId: '63130500116',
		img: '../src/assets/63130500116.png',
		socailLink: {
			ig: 'https://www.instagram.com/srbeam_/',
			fb: 'https://www.facebook.com/b.beamsrs',
			github: 'https://github.com/srbeam'
		}
	},
	{
		name: 'Siraphop',
		surname: 'Pattaragatewit',
		studentId: '63130500119',
		img: '../src/assets/63130500119.png',
		socailLink: {
			ig: 'https://www.instagram.com/siraph.p/',
			fb: 'https://www.facebook.com/siraph.p/',
			github: 'https://github.com/phop-parker'
		}
	},
	{
		name: 'Supichaya',
		surname: 'Muennunch',
		studentId: '63130500123',
		img: '../src/assets/63130500123.png',
		socailLink: {
			ig: 'https://www.instagram.com/s.sudjaab_/',
			fb: 'https://www.facebook.com/spy.spcy',
			github: 'https://github.com/spyy18'
		}
	},
	{
		name: 'Thanat',
		surname: 'Leeruengkij',
		studentId: '63130500156',
		img: '../src/assets/63130500156.png',
		socailLink: {
			ig: 'https://www.instagram.com/piitur/',
			fb: 'https://www.facebook.com/PterHolmes',
			github: 'https://github.com/petergurock'
		}
	}
]
</script>

<template>
	<div>
		<div class="card" v-for="(member, index) in members" :key="index">
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
	margin-bottom: 2%;
	padding: 20px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.left {
	float: left;
	width: 50%;
	display: flex;
	justify-content: center;
	height: 65px;
}
.right {
	float: right;
	width: 50%;
	height: 65px;
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
