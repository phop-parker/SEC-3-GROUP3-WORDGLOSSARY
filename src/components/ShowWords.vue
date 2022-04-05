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
		<div class="table">
			<table class="content-table">
				<thead>
					<tr>
						<th>NO.</th>
						<th>Word</th>
						<th>Meaning</th>
						<th colspan="2"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(fullWord, index) in fullWords" :key="index">
						<td>{{ index + 1 }} )</td>
						<td>{{ fullWord.word }}</td>
						<td>{{ fullWord.meaning }}</td>
						<td><button @click="$emit('edit', fullWord)">Edit</button></td>
						<td>
							<button @click="$emit('delete', fullWord.id)">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped>
table {
	min-width: 500px;
	border: 1px solid black;
	border-radius: 5px 5px 5px 5px;
}
th {
	padding: 12px 15px;
	text-align: center;
}
td {
	align-items: center;
	text-align: center;
}
tbody tr:nth-of-type(even) {
	background-color: #f0f0f0;
}

thead tr {
	background-color: #3e5151;
	color: white;
	font-weight: bold;
}
</style>
