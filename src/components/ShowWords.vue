<script setup>
defineEmits(['delete', 'edit'])
defineProps({
	fullWords: {
		type: Array,
		require: true
	}
})
</script>

<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">NO.</th>
					<th scope="col">Word</th>
					<th scope="col">Meaning</th>
					<th scope="col" colspan="2"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(fullWord, index) in fullWords" :key="index">
					<td scop="row">{{ index + 1 }} )</td>
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
