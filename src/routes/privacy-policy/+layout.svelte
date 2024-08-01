<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	function onChange(e: Event) {
		const select = e.target as HTMLSelectElement;
		goto(select.value);
	}
</script>

<div class="flex justify-end p-10" on:change={onChange}>
	<select class="select select-bordered max-w-xs">
		<option value="es" selected={$page.url.pathname === '/privacy-policy/es'}>Español</option>
		<option value="en" selected={$page.url.pathname === '/privacy-policy/en'}>English</option>
	</select>
</div>
<slot />
