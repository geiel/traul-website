<script lang="ts">
	import categories from '$lib/assets/categories.svg';
	import details from '$lib/assets/details.svg';
	import mails from '$lib/assets/mails.svg';
</script>

<div
	class="h-screen w-full flex flex-col items-center bg-gradient-to-br from-blue-100 to-cyan-100 space-y-20"
>
	<div class="md:max-w-3xl flex mt-24 md:mt-48">
		<div class="flex flex-col gap-7 items-center">
			<h1 class="text-center text-5xl md:text-8xl font-bold">Todos tus gastos en un solo lugar</h1>
			<p class="text-center text-lg md:max-w-2xl">
				Visualiza y categoriza los gastos de todas tus tarjetas automaticamente y en un solo lugar.
			</p>
			<div class="flex flex-col md:flex-row p-2 w-full gap-2 items-center md:max-w-xl">
				<label class="input input-bordered flex items-center gap-2 w-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4 opacity-70"
						><path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
						/><path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
						/></svg
					>
					<input type="text" class="grow" placeholder="traul@gmail.com" />
				</label>
				<button class="btn w-full">Notificame</button>
			</div>
		</div>
	</div>

	<div class="flex md:max-w-5xl w-full">
		<div class="card shadow-xl w-full bg-base-100">
			<div class="card-body">
				<div class="flex flex-col md:flex-row w-full gap-3 md:gap-5">
					<div class="card bg-primary w-full">
						<div class="card-body">
							<h2 class="card-title">Mira donde tu dinero se gasta</h2>
							<img alt="Gastos divididos en categorias automaticamente" src={categories} />
						</div>
					</div>
					<div class="card bg-secondary w-full">
						<div class="card-body">
							<h2 class="card-title">Cada gasto esta detallado</h2>
							<img alt="El detalle de un gasto en el Banco Popular" src={details} class="pt-10" />
						</div>
					</div>
					<div class="card bg-accent w-full">
						<div class="card-body">
							<h2 class="card-title">
								No necesitas dar ninguna informacion bancaria, solalemente tu email
							</h2>
							<img alt="Gmail y outlook para ver tus gastos" src={mails} class="pt-10" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
