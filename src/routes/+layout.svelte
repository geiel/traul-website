<script>
	import '../app.css';

	import logo from '$lib/assets/traul-logo.svg';
	import { Toaster } from 'svelte-sonner';
</script>

<svelte:head>
	<title>Traul - Maneja tus finanzas en un solo lugar</title>
</svelte:head>

<Toaster position="top-right" richColors />
<div class="fixed top-2 left-4">
	<img alt="Traul Logo" src={logo} class="w-20" />
</div>
<slot />
