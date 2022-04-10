<script setup>
import {ref} from 'vue'
defineEmits(['delete', 'edit','deleteSelected','deleteAll'])
defineProps({
	fullWords: {
		type: Array,
		require: true
	}
})
const selectedItems = ref([]);
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
						<td v-if="isSelectBox"><input
                        type="checkbox"
                        :value="fullWord.id"
                        v-model="selectedItems"
                      />
					  </td>
					  <td scop="row" v-else>{{ index + 1 }} </td>
				
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
		<div v-if="!isSelectBox">
			<span @click="boxToggle()">Select</span>
		</div>
		<div v-else>
			<button @click="$emit('deleteSelected', selectedItems)">delete selected</button>
			<button @click="$emit('deleteAll')">delete all</button>
		</div>
	</div>
</template>

<style scoped>
table {
	margin-top: 30px;
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
