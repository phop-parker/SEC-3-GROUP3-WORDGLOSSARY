<script setup>
import { ref } from 'vue'
import MemberList from '../components/MemberList.vue'
import ContactUsForm from '../components/ContactUsForm.vue'

const msg = ref({})
const isSuccess = ref(false)
const toggleSuccess = () =>
	isSuccess.value === false
		? (isSuccess.value = true)
		: (isSuccess.value = false)

const resetFailedSubmit = () => {
	failedSubmit.value = ''
}

const failedSubmit = ref()
const sendMessagetoDb = async (msgDetails) => {
	if (
		msgDetails.name == undefined &&
		msgDetails.email == undefined &&
		msgDetails.message == undefined
	) {
		failedSubmit.value = 'allMessageDetail'
		console.log(failedSubmit.value)
		setTimeout(resetFailedSubmit, 3000)
	} else if (msgDetails.name == undefined || msgDetails.name == '') {
		failedSubmit.value = 'name'
		console.log(failedSubmit.value)
		setTimeout(resetFailedSubmit, 3000)
	} else if (msgDetails.email == undefined || msgDetails.email == '') {
		failedSubmit.value = 'email'
		console.log(failedSubmit.value)
		setTimeout(resetFailedSubmit, 3000)
	} else if (msgDetails.message == undefined || msgDetails.message == '') {
		failedSubmit.value = 'message'
		console.log(failedSubmit.value)
		setTimeout(resetFailedSubmit, 3000)
	} else {
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
}
</script>

<template>
	<div>
		<div class="row">
			<div class="col-1">
				<!-- <MemberList :membersList="members" /> -->
				<MemberList />
			</div>
			<div class="col-2">
				<ContactUsForm
					class="contactUs-form"
					@sendMessage="sendMessagetoDb"
					:contactUs="msg"
					:status="isSuccess"
					:failed="failedSubmit"
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
}
.col-1 {
	flex-basis: 45%;
	position: relative;
}
.col-2 {
	position: relative;
	flex-basis: 50%;
	padding-left: 10%;
}
.col-2 img {
	width: 100%;
}
.col-1 h4 {
	margin-bottom: 3%;
	text-align: center;
}
</style>
