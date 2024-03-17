<script>
	import '../app.css';

	import logo from '$lib/assets/traul-logo.svg';
</script>

<svelte:head>
	<title>Traul, Tus gastos en un solo lugar</title>
</svelte:head>

<div class="fixed top-2 left-4">
	<img alt="Traul Logo" src={logo} class="w-20" />
</div>
<slot />
