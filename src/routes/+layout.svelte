<script>
	import '../app.css';

	import logo from '$lib/assets/traul-logo.svg';
	import { Toaster } from 'svelte-sonner';
	import SeoHeaders from '../components/SeoHeaders.svelte';
</script>

<SeoHeaders />

<Toaster position="top-right" richColors />
<a class="fixed top-2 left-4" href="/">
	<img itemprop="image" alt="Traul Logo" src={logo} class="w-20" />
</a>
<slot />
