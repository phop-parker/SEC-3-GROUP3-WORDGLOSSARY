<script setup>
import { computed } from 'vue'
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
	failed: {
		type: String,
		default: ''
	}
})

const isSuccess = computed(() => props.status)
const isFailed = computed(() => props.failed)
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
		<div class="form-container">
			<h4>Send Message</h4>
			<div>
				<p class="label">Full Name *</p>
				<input
					class="input"
					type="text"
					v-model="msgDetails.name"
					placeholder="type your full name here"
				/>
			</div>
			<div>
				<p class="label">Email *</p>
				<input
					class="input"
					type="text"
					v-model="msgDetails.email"
					placeholder="type your email here"
				/>
			</div>
			<div>
				<p class="label">Message *</p>
				<textarea
					class="input"
					placeholder="type your message here"
					v-model="msgDetails.message"
				></textarea>
			</div>
			<div class="btnStatus">
				<button class="submitBtn" @click="$emit('sendMessage', msgDetails)">
					Submit
				</button>
				<p v-show="isSuccess" class="success-alert">Message sent successfully</p>
				<div class="failed">
					<p v-show="isFailed == 'allMessageDetail'">
						Please type in the input first
					</p>
					<p v-show="isFailed == 'name'">Please insert your name first</p>
					<p v-show="isFailed == 'email'">Please insert your email first</p>
					<p v-show="isFailed == 'message'">Please insert message first</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.success-alert {
	color: green;
	margin-left: 20px;
	padding-top: 5px;
}
.failed {
	color: red;
	margin-left: 20px;
	padding-top: 5px;
}
.btnStatus {
	display: inline-flex;
}
.label {
	color: rgb(219, 33, 0);
	font-weight: 500;
	font-size: 14px;
	margin-bottom: 5px;
}
::placeholder {
	font-size: 14px;
}
.input {
	outline: none;
	width: 400px;
	border: 1px solid rgba(0, 0, 0, 0.329);
	font-size: 18px;
	margin-bottom: 10px;
	border-radius: 5px;
	padding: 5px;
}
.input:focus {
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}
.submitBtn {
	color: #fff;
	border-radius: 5px;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	height: 40px;
	border-radius: 6px;
	outline: none;
	border: 0;
	margin-right: 5px;
}
.submitBtn:hover {
	cursor: pointer;
	background: linear-gradient(
		90deg,
		rgb(102, 137, 137) 0%,
		rgb(50, 66, 66) 100%
	);
}
@media screen and (max-width: 800px) {
	.input {
		width: 100%;
	}
}
</style>
