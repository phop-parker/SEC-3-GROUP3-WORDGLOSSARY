<script setup>
import {computed} from 'vue'
defineEmits(['sendMessage'])

const props = defineProps({
	contactUs: {
		type: Object,
		default: {}
	},
		status: {
		type: Boolean,
		default: false
	},
})

const isSuccess = computed (()=> props.status)
const msgDetails = computed(() => {
	return {
		name: props.contactUs.name,
		email: props.contactUs.email,
		message: props.contactUs.message
	}
})

</script>

<template>
	<div>
		<div class="test">
			<p>Send Message</p>
			<div>
				<h4>Name</h4>
				<input type="text" v-model="msgDetails.name">
			</div>
			<div>
				<h4>Email</h4>
				<input type="text" v-model="msgDetails.email">
			</div>
			<div>
				<h4>Message</h4>
				<textarea placeholder="type your message here" v-model="msgDetails.message"></textarea>
			</div>
			<div>
				<button @click="$emit('sendMessage', msgDetails)">submit</button>
				<h4 v-show="isSuccess">message sent successfully</h4>
			</div>

		</div>
	</div>
</template>

<style scoped>
.test {
	background-color: aqua;
	width: 500px;
	height: 500px;
}
</style>
