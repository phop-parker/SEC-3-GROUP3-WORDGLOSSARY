<script setup>
import MemberList from '../components/MemberList.vue'
import ContactUsForm from '../components/ContactUsForm.vue'
const members = [
	{
		name: 'Sarida',
		surname: 'Buakaew',
		studentId: '63130500112',
		img: '../src/assets/63130500112.png',
		socailLink: {
			ig: 'https://www.instagram.com/sarimintt/',
			fb: 'https://web.facebook.com/sarixmint',
			github: ''
		}
	},
	{
		name: 'Sarisa',
		surname: 'Phulakorn',
		studentId: '63130500116',
		img: '../src/assets/63130500116.png',
		socailLink: {
			ig: '',
			fb: '',
			github: ''
		}
	},
	{
		name: 'Siraphop',
		surname: 'Pattaragatewit',
		studentId: '63130500119',
		img: '../src/assets/63130500119.png',
		socailLink: {
			ig: '',
			fb: '',
			github: ''
		}
	},
	{
		name: 'Supichaya',
		surname: 'Muennunch',
		studentId: '63130500123',
		img: '../src/assets/63130500123.png',
		socailLink: {
			ig: '',
			fb: '',
			github: ''
		}
	},
	{
		name: 'Thanat',
		surname: 'Leeruengkij',
		studentId: '63130500156',
		img: '../src/assets/63130500156.png',
		socailLink: {
			ig: '',
			fb: '',
			github: ''
		}
	}
]
</script>

<template>
	<div>
		<div class="row">
			<div class="col-1">
				<h4>GROUP 3 SEC 3 MEMBER</h4>
				<MemberList :membersList="members" />
			</div>
			<div class="col-2">
				<ContactUsForm />
			</div>
		</div>
	</div>
</template>

<style scoped>
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* margin: 100px 0; */
}
.col-1 {
	flex-basis: 45%;
	position: relative;
	/* margin-left: 50px; */
}
.col-2 {
	position: relative;
	flex-basis: 50%;
	/* display: flex;
	align-items: center; */
}
.col-1 h4 {
	margin-bottom: 3%;
	text-align: center;
}
</style>
