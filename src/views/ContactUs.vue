<script setup>
import { ref } from 'vue'
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

const msg = ref({})
const isSuccess = ref(false)
const toggleSuccess = () =>
	isSuccess.value === false
		? (isSuccess.value = true)
		: (isSuccess.value = false)

const sendMessagetoDb = async (msgDetails) => {
	const res = await fetch(`http://localhost:5000/message`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			name: msgDetails.name,
			email: msgDetails.email,
			message: msgDetails.message
		})
	})
	if (res.status === 201) {
		isSuccess.value = true
		console.log('message sent successfully')
	} else {
		console.log('error,cannot add data')
	}
	msg.value = {}
	setTimeout(toggleSuccess, 2000)
}
</script>

<template>
	<div>
		<div class="row">
			<div class="col-1">
				<MemberList :membersList="members" />
			</div>
			<div class="col-2">
				<!-- <div class="color-box"></div> -->
				<ContactUsForm
					class="contactUs-form"
					@sendMessage="sendMessagetoDb"
					:contactUs="msg"
					:status="isSuccess"
				/>
				<img src="../assets/reading-book.jpg" />
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
	/* background-color: aqua; */
}
.col-1 {
	flex-basis: 45%;
	position: relative;
	/* margin-left: 50px; */
	/* padding-left: 10%; */
}
.col-2 {
	position: relative;
	flex-basis: 50%;
	/* display: flex; */
	/* align-items: center; */
	/* display: flex; */
	/* justify-content: center; */
	/* align-items: center; */
	/* background-color: aqua; */
	/* text-align: center; */
	padding-left: 10%;
}
.col-2 img {
	width: 100%;
	/* text-align: center; */
}
.col-1 h4 {
	margin-bottom: 3%;
	text-align: center;
}
@media screen and (max-width: 800px) {
}
</style>
