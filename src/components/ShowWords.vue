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
	</div>
</template>

<style scoped>
table {
	min-width: 600px;
	border: 1px solid black;
	border-radius: 5px 5px 5px 5px;
}
th,
td {
	padding: 10px 10px;
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
#remove {
	/* width: 20px; */
	/* height: 20px; */
	border-radius: 50%;
	background-color: #e6e6e6;
	margin-top: 10px;
	padding: 4px;
	/* padding-top: 5px; */
}
#remove:hover {
	background-color: #c0b49b;
	cursor: pointer;
	color: white;
}
</style>
