<script lang="ts">
	import { enhance } from '$app/forms';
	import categories from '$lib/assets/categories.svg';
	import details from '$lib/assets/details.svg';
	import mails from '$lib/assets/mails.svg';

	import { toast } from 'svelte-sonner';

	let submiting = false;
</script>

<div
	class="w-full flex flex-col pb-4 items-center bg-gradient-to-br from-blue-100 to-cyan-100 space-y-20"
>
	<div class="md:max-w-3xl flex mt-24 md:mt-48">
		<div class="flex flex-col gap-7 items-center p-2 md:p-0">
			<h1 class="text-center text-4xl md:text-8xl font-extrabold md:font-bold">
				Todos tus gastos en un solo lugar
			</h1>
			<p class="text-center opacity-70 md:text-xl md:max-w-2xl">
				Visualiza y categoriza los gastos de todas tus tarjetas automáticamente.
			</p>
			<form
				method="POST"
				class="flex flex-col md:flex-row p-4 w-full gap-2 items-center md:max-w-2xl"
				use:enhance={() => {
					submiting = true;
					return async ({ result, update }) => {
						if (result.type === 'failure' && result.data) {
							toast.error(result.data.message + '');
						} else {
							toast.success('Gracias por unirte a la lista de espera');
							await update();
						}
						submiting = false;
					};
				}}
			>
				<label class="input input-bordered flex items-center gap-2 w-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4 opacity-70 fill-accent"
						><path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
						/><path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
						/></svg
					>
					<input type="text" name="email" class="grow" placeholder="traul@gmail.com" />
				</label>
				<button class="btn btn-primary w-full md:btn-wide" type="submit" disabled={submiting}>
					{#if submiting}
						<span class="loading loading-spinner"></span>
					{/if}
					Notifícame
				</button>
			</form>
		</div>
	</div>

	<div class="flex md:max-w-5xl w-full">
		<div class="card shadow-xl w-full bg-base-100">
			<div class="card-body">
				<div class="flex flex-col md:flex-row w-full gap-3 md:gap-5">
					<div class="card bg-primary w-full">
						<div class="card-body">
							<h2 class="card-title">Controla cómo se distribuyen tus gastos</h2>
							<img alt="Gastos divididos en categorias automaticamente" src={categories} />
						</div>
					</div>
					<div class="card bg-secondary w-full">
						<div class="card-body">
							<h2 class="card-title">Desglose detallado de tus gastos</h2>
							<img alt="El detalle de un gasto en el Banco Popular" src={details} class="pt-10" />
						</div>
					</div>
					<div class="card bg-accent w-full">
						<div class="card-body">
							<h2 class="card-title">
								No necesitas dar ninguna información bancaria, solamente tu email
							</h2>
							<img alt="Gmail y outlook para ver tus gastos" src={mails} class="pt-10" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col justify-center items-center my-14 md:my-34">
	<h1 class="text-center text-4xl md:text-5xl font-extrabold md:font-bold">
		Preguntas y respuestas
	</h1>
	<div class="max-w-2xl py-5 px-2 space-y-2">
		<div class="collapse collapse-plus bg-base-200">
			<input type="radio" name="my-accordion-3" />
			<div class="collapse-title text-xl font-medium">
				¿Cómo puede Traul ver mis gastos solo con mi correo?
			</div>
			<div class="collapse-content">
				<p>
					Traul analiza los comprobantes bancarios que recibes en tu correo electrónico para
					identificar y categorizar tus gastos de manera precisa. Este proceso se enfoca
					exclusivamente en la información contenida en dichos comprobantes; no se accede ni se lee
					ningún otro tipo de correo, asegurando así tu privacidad y la seguridad de tus datos.
				</p>
			</div>
		</div>
		<div class="collapse collapse-plus bg-base-200">
			<input type="radio" name="my-accordion-3" />
			<div class="collapse-title text-xl font-medium">¿Traul será gratis de usar?</div>
			<div class="collapse-content">
				<p>
					Traul será una aplicación gratuita para usar con un banco específico, permitiendo a los
					usuarios gestionar y visualizar sus gastos sin costo. Para aquellos que deseen ampliar sus
					servicios, como la inclusión de múltiples bancos o la actualización de gastos en tiempo
					real, se ofrecerán opciones premium mediante suscripción. Esto permite a los usuarios
					elegir el nivel de servicio que mejor se adapte a sus necesidades financieras.
				</p>
			</div>
		</div>
		<div class="collapse collapse-plus bg-base-200">
			<input type="radio" name="my-accordion-3" />
			<div class="collapse-title text-xl font-medium">¿En qué países estará Traul disponible?</div>
			<div class="collapse-content">
				<p>
					Inicialmente, Traul estará disponible únicamente en la República Dominicana. Sin embargo,
					si resides en otro país y deseas que la aplicación esté disponible en tu localidad, te
					invitamos a completar el formulario disponible en nuestro sitio web. Además, podrás
					participar en futuras encuestas que nos ayudarán a expandir nuestra cobertura. Esta
					información nos es invaluable para planificar nuestra expansión internacional.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col bg-secondary justify-center items-center gap-5 mt-14 py-14 md:mt-34">
	<h1 class="text-center text-4xl md:text-5xl font-extrabold md:font-bold">
		Únete a el futuro <br /> de tus finanzas hoy
	</h1>
	<p class="text-center opacity-90 md:text-xl md:max-w-2xl">No pierdas tu oportunidad.</p>
	<form
		method="POST"
		class="flex flex-col md:flex-row p-4 w-full gap-2 items-center md:max-w-2xl"
		use:enhance={() => {
			submiting = true;
			return async ({ result, update }) => {
				if (result.type === 'failure' && result.data) {
					toast.error(result.data.message + '');
				} else {
					toast.success('Gracias por unirte a la lista de espera');
					await update();
				}
			};
			submiting = false;
		}}
	>
		<label class="input input-bordered flex items-center gap-2 w-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4 opacity-70 fill-accent"
				><path
					d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
				/><path
					d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
				/></svg
			>
			<input type="text" name="email" class="grow" placeholder="traul@gmail.com" />
		</label>
		<button class="btn btn-primary w-full md:btn-wide" disabled={submiting}>
			{#if submiting}
				<span class="loading loading-spinner"></span>
			{/if}
			Ponme en la lista
		</button>
	</form>
</div>

<footer class="footer footer-center p-4 text-base-content">
	<aside>
		<p>Copyright © 2024 - All right reserved by Traul</p>
	</aside>
</footer>
