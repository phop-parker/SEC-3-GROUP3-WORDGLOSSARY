<script setup>
import { ref } from 'vue'
defineEmits(['delete', 'edit', 'deleteSelected', 'deleteAll'])
defineProps({
	fullWords: {
		type: Array,
		require: true
	}
})
const selectedItems = ref([])
const isSelectBox = ref(false)
const boxToggle = () => {
	if (!isSelectBox.value) {
		isSelectBox.value = true
	} else {
		isSelectBox.value = false
		selectedItems.value = []
	}
}
</script>

<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col" v-if="isSelectBox">Select</th>
					<th scope="col" v-else>NO.</th>
					<th scope="col">Word</th>
					<th scope="col">Meaning</th>
					<th scope="col" colspan="2"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(fullWord, index) in fullWords" :key="index">
					<td v-if="isSelectBox">
						<input type="checkbox" :value="fullWord.id" v-model="selectedItems" />
					</td>
					<td scop="row" v-else>{{ index + 1 }}</td>

					<td>{{ fullWord.word }}</td>
					<td>{{ fullWord.meaning }}</td>
					<td>
						<span id="remove" @click="$emit('edit', fullWord)">
							<i class="fa fa-pencil"></i>
						</span>
					</td>
					<td>
						<span id="remove" @click="$emit('delete', fullWord.id)">
							<i class="fa fa-trash-o"></i>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-if="!isSelectBox" class="select-mode">
			<span class="select" @click="boxToggle()">Select Multiple Word</span>
		</div>
		<div v-else class="select-mode">
			<button class="delete" @click="$emit('deleteSelected', selectedItems)">
				Delete Selected
			</button>
			<button class="delete" @click="$emit('deleteAll')">Delete All</button>
			<button class="back" @click="boxToggle()">Back</button>
		</div>
	</div>
</template>

<style scoped>
.back {
	color: #fff;
	border-radius: 5px;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	margin-left: 15px;
	height: 35px;
	border-radius: 6px;
	outline: none;
	border: 0;
}

.select-mode {
	float: right;
}

.back:hover {
	cursor: pointer;
	background: linear-gradient(
		90deg,
		rgb(102, 137, 137) 0%,
		rgb(50, 66, 66) 100%
	);
}
.delete {
	background: linear-gradient(90deg, rgb(226, 20, 20) 0%, rgb(156, 39, 39) 100%);
	color: #fff;
	border-radius: 5px;
	margin-left: 15px;
	height: 35px;
	border-radius: 6px;
	outline: none;
	border: 0;
}
.delete:hover {
	background: linear-gradient(90deg, rgb(225, 40, 40) 0%, rgb(125, 25, 25) 100%);
	cursor: pointer;
}
.select {
	padding: 5px;
	border-radius: 10px;
	background: whitesmoke;
}
.select:hover {
	cursor: pointer;
	background: linear-gradient(
		90deg,
		rgba(113, 153, 153, 1) 0%,
		rgba(62, 81, 81, 1) 100%
	);
	padding: 5px;
	border-radius: 10px;
	color: #fff;
}
table {
	margin-top: 30px;
	margin-bottom: 40px;
}
th,
td {
	padding: 10px 10px;
	text-align: center;
}

tbody tr:nth-of-type(even) {
	background-color: #f0f0f0;
}

#remove {
	border-radius: 50%;

	margin-top: 10px;
	padding: 4px;
}
#remove:hover {
	/* background-color: #c0b49b; */
	background-color: #e6e6e6;
	cursor: pointer;
	/* color: white; */
}
</style>
