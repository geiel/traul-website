<script lang="ts">
	import { formatNumber } from '$lib/number-utils.js';
	export let data;
</script>

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th>Descripción</th>
				<th>Monto</th>
			</tr>
		</thead>
		<tbody>
			{#each data.mailExpenses as mailExpense}
				<tr>
					<th>{mailExpense.description}</th>
					<td>{mailExpense.currency.String}${formatNumber(mailExpense.amount)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
