<script lang="ts">
	import { formatNumber } from '$lib/number-utils.js';

	export let data;

	let currency = 'DOP';
	let totalAmount: number;
	let noTransactions = false;


	$: globalCategorizedExpenseByCurrency = data.globalTransactions?.filter((expense) => {
		if (expense.currency === currency) {
			totalAmount += expense.totalAmount;
			return expense;
		}
	});

	$: userCategorizedExpenseByCurrency = data.transactions?.filter((expense) => {
		if (expense.currency === currency) {
			totalAmount += expense.totalAmount;
			return expense;
		}
	});

	$: uncategorizedExpenseByCurrency = data.uncategorizeTransactions?.find((expense) => {
		if (expense.currency === currency) {
			totalAmount += expense.totalAmount;
			return expense;
		}
	});

	$: {
		if (
			!uncategorizedExpenseByCurrency &&
			(!userCategorizedExpenseByCurrency || userCategorizedExpenseByCurrency.length === 0)
		) {
			noTransactions = true;
		}
	}
</script>

<div class="flex flex-col container mx-auto">
	<div class="flex justify-center p-5">
		<div class="flex justify-center w-64 p-4 gap-10 bg-[#D9D9D9] rounded-full">
			<h2 class="text-xl font-bold">Marzo 2024</h2>
		</div>
	</div>
	<div class="flex justify-center">
		<select class="select select-bordered w-full max-w-xs" bind:value={currency}>
			<option value="DOP">Peso dominicano</option>
			<option value="USD">Dólar estadounidense</option>
		</select>
	</div>
	<div class="flex flex-col p-5 gap-3">
		{#if noTransactions}
			<p class="text-center">Por lo visto no tienes transacciones con los bancos procesados</p>
		{/if}
		{#if uncategorizedExpenseByCurrency}
			<a
				href="transactions/uncategorized"
				class="flex justify-between p-3 rounded-xl bg-[#D9D9D9] font-semibold"
			>
				<p>Sin categorizar</p>
				<p>
					{uncategorizedExpenseByCurrency.currency}${formatNumber(
						uncategorizedExpenseByCurrency.totalAmount
					)}
				</p>
			</a>
		{/if}
		{#if userCategorizedExpenseByCurrency}
			{#each userCategorizedExpenseByCurrency as transaction}
				<div class="flex justify-between p-3 rounded-xl bg-[#D9D9D9] font-semibold">
					<p>{transaction.description}</p>
					<p>{currency}${formatNumber(transaction.totalAmount)}</p>
				</div>
			{/each}
		{/if}
		{#if globalCategorizedExpenseByCurrency}
			{#each globalCategorizedExpenseByCurrency as transaction}
				<div class="flex justify-between p-3 rounded-xl bg-[#D9D9D9] font-semibold">
					<p>{transaction.description}</p>
					<p>{currency}${formatNumber(transaction.totalAmount)}</p>
				</div>
			{/each}
		{/if}
	</div>
</div>
